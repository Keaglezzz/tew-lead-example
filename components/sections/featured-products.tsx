import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export default function FeaturedProducts() {
  const products = [
    {
      name: "Rose Quartz Yoni Egg",
      price: "$59.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Enhance self-love and heart connection",
    },
    {
      name: "Carnelian Pleasure Wand",
      price: "$79.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Stimulate passion and creative energy",
    },
    {
      name: "Amethyst Healing Set",
      price: "$89.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Release trauma and promote healing",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Crystal Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of crystals designed to enhance your sexual energy and feminine power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{product.price}</span>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <Button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded-full px-6 py-6">
              Shop All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

