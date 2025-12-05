"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ResizeHandle } from "./resize-handle"

type Tab = "about" | "case-studies" | "speaking" | "bookshelf" | "notes" | "gallery"

interface NavSidebarProps {
  width: number
  isDragging: boolean
  onMouseDown: (e: React.MouseEvent) => void
}

const tabs: { id: Tab; label: string; href: string }[] = [
  { id: "about", label: "About", href: "/" },
  { id: "case-studies", label: "Case Studies", href: "/case-studies" },
  { id: "speaking", label: "Speaking", href: "/speaking" },
  { id: "bookshelf", label: "Bookshelf", href: "/bookshelf" },
  { id: "notes", label: "Notes", href: "/notes" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
]

function getActiveTab(pathname: string): Tab {
  if (pathname === "/") return "about"
  if (pathname.startsWith("/case-studies")) return "case-studies"
  if (pathname.startsWith("/speaking")) return "speaking"
  if (pathname.startsWith("/bookshelf")) return "bookshelf"
  if (pathname.startsWith("/notes")) return "notes"
  if (pathname.startsWith("/gallery")) return "gallery"
  return "about"
}

export function NavSidebar({ width, isDragging, onMouseDown }: NavSidebarProps) {
  const pathname = usePathname()
  const activeTab = getActiveTab(pathname)

  return (
    <aside
      style={{ 
        borderRight: '3px double var(--border)',
        width: `${width}px`,
      }}
      className={cn(
        "fixed left-0 top-0 h-screen shrink-0 bg-background z-40",
        "hidden md:block",
      )}
    >
      <div className="h-full">
        {/* Ribbon Bookmark */}
        <div className="absolute top-0 left-8 w-8 h-40 z-10 group">
          <div
            className="w-full h-full relative overflow-hidden"
            style={{
              backgroundImage: 'url("/3. Gallery/Bookmark-Material.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 12px), 0 100%)',
              boxShadow: '2px 2px 6px rgba(0,0,0,0.3)',
            }}
          />
        </div>

        <nav className="flex flex-col gap-2 p-8 pt-54">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "text-left py-1 transition-colors uppercase tracking-widest text-xs",
                activeTab === tab.id ? "text-foreground" : "text-foreground/40 hover:text-foreground/70",
              )}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        {/* Wax Seal - only show when not on About or Gallery page */}
        {activeTab !== "about" && activeTab !== "gallery" && (
          <div className="absolute bottom-8 left-6 z-10">
            <img 
              src="/IniOluwa Seal 1.png" 
              alt="OMÒ ASÍWAJU Seal" 
              className="object-contain"
              style={{ width: '104px', height: '104px' }}
            />
          </div>
        )}

        <ResizeHandle onMouseDown={onMouseDown} isDragging={isDragging} />
      </div>
    </aside>
  )
}

// Mobile drawer component
export function MobileNavDrawer({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()
  const activeTab = getActiveTab(pathname)

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/10 z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div
        className={cn(
          "fixed left-0 top-0 h-screen w-[75vw] max-w-[300px] bg-background z-50 md:hidden",
          "transform transition-transform duration-300 ease-out",
          "border-r-2 border-border shadow-xl",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Ribbon Bookmark */}
        <div className="absolute top-0 left-6 w-6 h-32 z-10">
          <div
            className="w-full h-full relative overflow-hidden"
            style={{
              backgroundImage: 'url("/3. Gallery/Bookmark-Material.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 10px), 0 100%)',
              boxShadow: '2px 2px 6px rgba(0,0,0,0.3)',
            }}
          />
        </div>

        <nav className="flex flex-col gap-3 p-6 pt-40">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              onClick={onClose}
              className={cn(
                "text-left py-2 transition-colors uppercase tracking-widest text-sm",
                activeTab === tab.id ? "text-foreground font-medium" : "text-foreground/50",
              )}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        {/* Wax Seal on mobile - only show when not on About or Gallery page */}
        {activeTab !== "about" && activeTab !== "gallery" && (
          <div className="absolute bottom-6 left-6 z-10">
            <img 
              src="/IniOluwa Seal 1.png" 
              alt="OMÒ ASÍWAJU Seal" 
              className="object-contain"
              style={{ width: '80px', height: '80px' }}
            />
          </div>
        )}
      </div>
    </>
  )
}

