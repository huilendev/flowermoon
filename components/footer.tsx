"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Fleur de Lune</h4>
            <p className="text-sm opacity-75 leading-relaxed">Crafted with care, inspired by nature.</p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <Link href="https://instagram.com" className="opacity-75 hover:opacity-100 transition block">
                Instagram
              </Link>
              <Link href="https://pinterest.com" className="opacity-75 hover:opacity-100 transition block">
                Pinterest
              </Link>
              <Link href="https://facebook.com" className="opacity-75 hover:opacity-100 transition block">
                Facebook
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <Link href="mailto:hello@fleurdeLune.com" className="opacity-75 hover:opacity-100 transition block">
                hello@fleurdeLune.com
              </Link>
              <p className="opacity-75">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-50">
          <p>© 2025 Fleur de Lune — Crafted with care, inspired by nature.</p>
        </div>
      </div>
    </footer>
  )
}
