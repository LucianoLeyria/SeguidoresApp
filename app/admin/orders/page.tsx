"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Lock, LogOut } from "lucide-react"

interface Order {
  id: number
  status: string
  statusDetail: string
  amount: number
  currency: string
  payerEmail: string
  description: string
  date: string
  paymentMethod: string
}

const statusConfig: Record<string, { label: string; color: string }> = {
  approved: { label: "Aprobado", color: "bg-green-100 text-green-800" },
  pending: { label: "Pendiente", color: "bg-yellow-100 text-yellow-800" },
  in_process: { label: "En proceso", color: "bg-blue-100 text-blue-800" },
  rejected: { label: "Rechazado", color: "bg-red-100 text-red-800" },
  refunded: { label: "Reembolsado", color: "bg-purple-100 text-purple-800" },
  cancelled: { label: "Cancelado", color: "bg-gray-100 text-gray-800" },
}

export default function AdminOrders() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [orders, setOrders] = useState<Order[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [storedPassword, setStoredPassword] = useState("")

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_password")
    if (saved) {
      setStoredPassword(saved)
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated && storedPassword) {
      fetchOrders()
    }
  }, [isAuthenticated, storedPassword])

  const fetchOrders = async () => {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/admin/orders", {
        headers: { "x-admin-password": storedPassword },
      })
      if (res.status === 401) {
        setError("Contraseña incorrecta")
        setIsAuthenticated(false)
        sessionStorage.removeItem("admin_password")
        return
      }
      const data = await res.json()
      if (data.error) {
        setError(data.error)
      } else {
        setOrders(data.orders)
        setTotal(data.total)
      }
    } catch {
      setError("Error al conectar con el servidor")
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    sessionStorage.setItem("admin_password", password)
    setStoredPassword(password)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("admin_password")
    setIsAuthenticated(false)
    setStoredPassword("")
    setOrders([])
    setPassword("")
  }

  const totalApproved = orders
    .filter((o) => o.status === "approved")
    .reduce((sum, o) => sum + o.amount, 0)

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full space-y-6"
        >
          <div className="flex justify-center">
            <Lock className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center">Panel de Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 cursor-pointer"
          >
            Entrar
          </Button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Pedidos</h1>
            <p className="text-gray-600 mt-1">{total} pagos en los ultimos 30 dias</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={fetchOrders}
              disabled={loading}
              variant="outline"
              className="border-gray-300 cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Actualizar
            </Button>
            <Button onClick={handleLogout} variant="outline" className="border-gray-300 cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-600">Total recaudado</p>
            <p className="text-2xl font-bold text-green-600">${totalApproved.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-600">Pagos aprobados</p>
            <p className="text-2xl font-bold text-gray-900">
              {orders.filter((o) => o.status === "approved").length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-600">Pagos pendientes</p>
            <p className="text-2xl font-bold text-yellow-600">
              {orders.filter((o) => o.status === "pending" || o.status === "in_process").length}
            </p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">ID</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Estado</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Monto</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Email</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Descripcion</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Medio de pago</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {loading && orders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-gray-500">
                      Cargando pedidos...
                    </td>
                  </tr>
                ) : orders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-gray-500">
                      No hay pedidos todavia
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => {
                    const status = statusConfig[order.status] || {
                      label: order.status,
                      color: "bg-gray-100 text-gray-800",
                    }
                    return (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 text-sm font-mono text-gray-900">{order.id}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                            {status.label}
                          </span>
                        </td>
                        <td className="p-4 text-sm font-semibold text-gray-900">
                          ${order.amount?.toLocaleString()}
                        </td>
                        <td className="p-4 text-sm text-gray-700">{order.payerEmail}</td>
                        <td className="p-4 text-sm text-gray-700 max-w-[200px] truncate">
                          {order.description}
                        </td>
                        <td className="p-4 text-sm text-gray-700">{order.paymentMethod}</td>
                        <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                          {new Date(order.date).toLocaleString("es-AR")}
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
