"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-serif text-2xl font-bold text-foreground">
            Fleur de Lune
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">
              Services
            </Link>
            <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition">
              Work
            </Link>
            <Link href="#store" className="text-sm text-muted-foreground hover:text-foreground transition">
              Design Store
            </Link>
            <Link
              href="mailto:hello@fleurdeLune.com"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">
              Services
            </Link>
            <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition">
              Work
            </Link>
            <Link href="#store" className="text-sm text-muted-foreground hover:text-foreground transition">
              Design Store
            </Link>
            <Link
              href="mailto:hello@fleurdeLune.com"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
