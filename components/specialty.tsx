"use client"

import Image from "next/image"

export default function Specialty() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Specialty Florals and Arrangements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">About Us</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis.
              </p>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src="/orange-and-white-ranunculus-flowers-in-a-vase-on-g.jpg" alt="Floral arrangement" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
