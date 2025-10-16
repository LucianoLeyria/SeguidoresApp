"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

interface HeaderProps {
  selectedCategory?: string
  onCategoryChange?: (category: string) => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function Header({ selectedCategory = "all", onCategoryChange, searchQuery = "", onSearchChange }: HeaderProps) {
  const router = useRouter()

  const handleCategoryClick = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category)
    } else {
      // If no callback provided, navigate to home page
      router.push("/")
    }
  }

  const handleLogoClick = () => {
    if (onCategoryChange) {
      onCategoryChange("all")
    } else {
      router.push("/")
    }
  }

  return (
    <header className="bg-white text-gray-900 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex-shrink-0 cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shadow-md hover:shadow-orange-500/50 transition-all duration-300 border border-gray-200">
              <Image src="/logo.jpg" alt="Logo" width={48} height={48} className="object-cover w-full h-full" />
            </div>
          </button>

          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-8 flex-1">
            <button
              onClick={() => handleCategoryClick("all")}
              className="text-xs md:text-sm font-medium hover:text-orange-500 transition-colors cursor-pointer"
            >
              INICIO
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-xs md:text-sm font-medium hover:text-orange-500 transition-colors flex items-center gap-1 cursor-pointer">
                  PRODUCTOS
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border-gray-200">
                <DropdownMenuItem
                  onClick={() => handleCategoryClick("all")}
                  className="cursor-pointer text-gray-900 hover:bg-gray-100 hover:text-orange-500"
                >
                  Todos los productos
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleCategoryClick("seguidores-ig")}
                  className="cursor-pointer text-gray-900 hover:bg-gray-100 hover:text-orange-500"
                >
                  Seguidores IG
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleCategoryClick("likes-ig")}
                  className="cursor-pointer text-gray-900 hover:bg-gray-100 hover:text-orange-500"
                >
                  Likes IG
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleCategoryClick("repros-ig")}
                  className="cursor-pointer text-gray-900 hover:bg-gray-100 hover:text-orange-500"
                >
                  Repros IG
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleCategoryClick("comentarios-ig")}
                  className="cursor-pointer text-gray-900 hover:bg-gray-100 hover:text-orange-500"
                >
                  Comentarios IG
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleCategoryClick("tiktok")}
                  className="cursor-pointer text-gray-900 hover:bg-gray-100 hover:text-orange-500"
                >
                  TikTok
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleCategoryClick("youtube")}
                  className="cursor-pointer text-gray-900 hover:bg-gray-100 hover:text-orange-500"
                >
                  YouTube
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Sobre Nosotros link */}
            <Link
              href="/sobre-nosotros"
              className="text-xs md:text-sm font-medium hover:text-orange-500 transition-colors cursor-pointer"
            >
              SOBRE NOSOTROS
            </Link>
          </nav>

          {/* Search */}
          <div className="relative flex-1 max-w-xs hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="¿Qué estás buscando?"
              className="pl-10 bg-gray-50 text-gray-900 border-gray-200 focus:border-orange-500 transition-colors"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="relative mt-4 md:hidden">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="search"
            placeholder="¿Qué estás buscando?"
            className="pl-10 bg-gray-50 text-gray-900 border-gray-200 focus:border-orange-500 transition-colors w-full"
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
        </div>
      </div>
    </header>
  )
}
