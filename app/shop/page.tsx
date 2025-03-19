"use client"

import { useState } from "react"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, ShoppingCart, Star, Filter, Search } from "lucide-react"
import Image from "next/image"
import {
  FirstTimeVisitorDiscount,
  ProductRecommendationBanner,
  AbandonedCartRecovery,
  VIPEarlyAccess,
} from "@/components/sections/shop-lead-capture"
import EnhancedCrystalQuiz from "@/components/sections/enhanced-crystal-quiz"

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 200])
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    {
      name: "Rose Quartz Yoni Egg",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Yoni Eggs",
      rating: 5,
      reviewCount: 42,
      bestseller: true,
    },
    {
      name: "Carnelian Pleasure Wand",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Pleasure Wands",
      rating: 4.5,
      reviewCount: 28,
      bestseller: false,
    },
    {
      name: "Amethyst Healing Set",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Crystal Sets",
      rating: 4.8,
      reviewCount: 36,
      bestseller: true,
    },
    {
      name: "Black Obsidian Protection Stone",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Healing Stones",
      rating: 4.7,
      reviewCount: 19,
      bestseller: false,
    },
    {
      name: "Jade Kegel Balls Set",
      price: 69.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Kegel Balls",
      rating: 4.9,
      reviewCount: 53,
      bestseller: true,
    },
    {
      name: "Clear Quartz Massage Roller",
      price: 45.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Massage Tools",
      rating: 4.6,
      reviewCount: 31,
      bestseller: false,
    },
    {
      name: "Moonstone Fertility Bracelet",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Jewelry",
      rating: 4.8,
      reviewCount: 24,
      bestseller: false,
    },
    {
      name: "Chakra Crystal Set",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Crystal Sets",
      rating: 5,
      reviewCount: 47,
      bestseller: true,
    },
  ]

  const categories = [
    "All Categories",
    "Yoni Eggs",
    "Pleasure Wands",
    "Crystal Sets",
    "Healing Stones",
    "Kegel Balls",
    "Massage Tools",
    "Jewelry",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-fuchsia-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Crystal Shop</h1>
              <p className="text-gray-600 mb-8">
                Ethically sourced crystals to enhance your sexual wellness and feminine embodiment practices.
              </p>

              {/* Search bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Product recommendation banner */}
          <div className="mb-12">
            <ProductRecommendationBanner />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters sidebar */}
            <div className={`lg:w-1/4 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, i) => (
                    <div key={i} className="flex items-center">
                      <Checkbox id={`category-${i}`} className="mr-2" />
                      <label htmlFor={`category-${i}`} className="text-sm text-gray-700 cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                <Slider
                  defaultValue={[0, 200]}
                  max={200}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-6"
                />
                <div className="flex items-center justify-between">
                  <div className="border rounded-md p-2 w-20 text-center">${priceRange[0]}</div>
                  <span className="text-gray-500">to</span>
                  <div className="border rounded-md p-2 w-20 text-center">${priceRange[1]}</div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
                <h3 className="font-bold text-lg mb-4">Customer Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <Checkbox id={`rating-${rating}`} className="mr-2" />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="flex items-center text-sm text-gray-700 cursor-pointer"
                      >
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(5 - rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gray-300" />
                        ))}
                        <span className="ml-2">& Up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* VIP early access signup */}
              <VIPEarlyAccess />
            </div>

            {/* Main content */}
            <div className="lg:w-3/4">
              {/* Mobile filter button */}
              <div className="lg:hidden mb-6">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>

              {/* Sort options */}
              <div className="flex flex-wrap justify-between items-center mb-6">
                <p className="text-gray-600">Showing {products.length} products</p>
                <select className="border rounded-md p-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest</option>
                </select>
              </div>

              {/* Products grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-64">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {product.bestseller && (
                        <div className="absolute top-4 left-4 bg-fuchsia-700 text-white text-xs font-medium px-2 py-1 rounded">
                          Bestseller
                        </div>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 rounded-full"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                      <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(Math.floor(product.rating))].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                          {product.rating % 1 !== 0 && (
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )}
                          {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-gray-300" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">({product.reviewCount})</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                        <Button size="sm" className="bg-fuchsia-700 hover:bg-fuchsia-800">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load more button */}
              <div className="text-center mt-12">
                <Button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white">Load More Products</Button>
              </div>
            </div>
          </div>
        </div>

        {/* First-time visitor discount popup */}
        <FirstTimeVisitorDiscount />

        {/* Abandoned cart recovery */}
        <AbandonedCartRecovery />

        {/* Enhanced crystal quiz */}
        <EnhancedCrystalQuiz />
      </main>
      <SiteFooter />
    </div>
  )
}

