"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useResizable } from "@/hooks/use-resizable"
import { NavSidebar, MobileNavDrawer } from "./nav-sidebar"

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sidebar = useResizable({ initialWidth: 192, minWidth: 150, maxWidth: 400 })

  return (
    <div className="flex min-h-screen">
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-5 left-5 z-[60] md:hidden bg-background border border-border rounded-lg p-2.5 hover:bg-muted shadow-md"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Desktop sidebar */}
      <NavSidebar
        width={sidebar.width}
        isDragging={sidebar.isDragging}
        onMouseDown={sidebar.handleMouseDown}
      />

      {/* Mobile drawer */}
      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main content area */}
      <div 
        className="flex-1 flex md:ml-0"
        style={{ marginLeft: `${sidebar.width}px` }}
      >
        <style jsx>{`
          @media (max-width: 767px) {
            div {
              margin-left: 0 !important;
            }
          }
        `}</style>
        {children}
      </div>
    </div>
  )
}

