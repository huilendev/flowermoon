"use client"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 opacity-30">
        <Image src="/floral-arrangement-background-with-pink-lilies-and.jpg" alt="Background flowers" fill className="object-cover" priority />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">A Studio Inspired by Nature</p>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">Fleur de Lune</h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas.
        </p>

        <Link
          href="#about"
          className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
        >
          About Us
        </Link>
      </div>
    </section>
  )
}
