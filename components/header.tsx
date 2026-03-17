"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useState } from "react"

interface HeaderProps {
  selectedCategory?: string
  onCategoryChange?: (category: string) => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function Header({ selectedCategory = "all", onCategoryChange, searchQuery = "", onSearchChange }: HeaderProps) {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleCategoryClick = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category)
    } else {
      router.push("/")
    }
    setMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (onCategoryChange) {
      onCategoryChange("all")
    } else {
      router.push("/")
    }
  }

  return (
    <header className="bg-white text-gray-900 border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo + Brand */}
          <button onClick={handleLogoClick} className="flex items-center gap-3 flex-shrink-0 cursor-pointer group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden shadow-md group-hover:shadow-orange-500/40 transition-all duration-300 border border-gray-200">
              <Image src="/logo.jpg" alt="Logo" width={44} height={44} className="object-cover w-full h-full" />
            </div>
            <span className="hidden sm:block font-bold text-sm md:text-base bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Crecimientoinsta
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <button
              onClick={() => handleCategoryClick("all")}
              className={`text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                selectedCategory === "all" ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
              }`}
            >
              INICIO
              {selectedCategory === "all" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-1 cursor-pointer py-1">
                  PRODUCTOS
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border-gray-200 shadow-lg rounded-xl p-1">
                {[
                  { key: "all", label: "Todos los productos" },
                  { key: "seguidores-ig", label: "Seguidores Instagram" },
                  { key: "likes-ig", label: "Likes Instagram" },
                  { key: "repros-ig", label: "Reproducciones Instagram" },
                  { key: "comentarios-ig", label: "Comentarios Instagram" },
                  { key: "tiktok", label: "TikTok" },
                  { key: "twitter", label: "Twitter / X" },
                  { key: "facebook", label: "Facebook" },
                  { key: "youtube", label: "YouTube" },
                  { key: "telegram", label: "Telegram" },
                ].map((item) => (
                  <DropdownMenuItem
                    key={item.key}
                    onClick={() => handleCategoryClick(item.key)}
                    className="cursor-pointer text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/sobre-nosotros"
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors cursor-pointer py-1"
            >
              SOBRE NOSOTROS
            </Link>
          </nav>

          {/* Desktop Search */}
          <div className="relative hidden md:block w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Buscar servicio..."
              className="pl-10 bg-gray-50 text-gray-900 border-gray-200 focus:border-orange-500 rounded-xl h-10 text-sm"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-100 pt-3 space-y-2">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Buscar servicio..."
                className="pl-10 bg-gray-50 text-gray-900 border-gray-200 focus:border-orange-500 rounded-xl h-10 text-sm w-full"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
            </div>
            {[
              { key: "all", label: "Inicio" },
              { key: "seguidores-ig", label: "Seguidores IG" },
              { key: "likes-ig", label: "Likes IG" },
              { key: "repros-ig", label: "Reproducciones IG" },
              { key: "comentarios-ig", label: "Comentarios IG" },
              { key: "tiktok", label: "TikTok" },
              { key: "twitter", label: "Twitter / X" },
              { key: "facebook", label: "Facebook" },
              { key: "youtube", label: "YouTube" },
              { key: "telegram", label: "Telegram" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => handleCategoryClick(item.key)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                  selectedCategory === item.key
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/sobre-nosotros"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
