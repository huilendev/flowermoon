"use client"

import Image from "next/image"

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Garden Romance",
      image: "/peach-roses-and-white-baby-breath-bouquet-arrangem.jpg",
    },
    {
      id: 2,
      title: "Minimalist Elegance",
      image: "/white-lilies-in-white-ceramic-vase-on-gray-backgro.jpg",
    },
    {
      id: 3,
      title: "Luxe Arch",
      image: "/red-and-green-floral-arch-wedding-installation-wit.jpg",
    },
  ]

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center mb-16">Our Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-square bg-muted">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-6">
                <h3 className="font-serif text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
