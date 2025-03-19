"use client"

import { useState } from "react"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calendar, Clock, ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  ContentUpgradeBanner,
  InContentLeadMagnet,
  BlogSidebarOptIn,
  ExitIntentPopup,
} from "@/components/sections/blog-lead-capture"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const blogPosts = [
    {
      title: "5 Crystal Practices for Enhanced Sexual Pleasure",
      excerpt:
        "Discover how to use crystals to deepen your connection to your body and enhance your sexual experiences.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Crystal Healing",
      date: "March 15, 2023",
      readTime: "8 min read",
    },
    {
      title: "Healing Sexual Trauma Through Embodiment Practices",
      excerpt: "Learn gentle approaches to reconnect with your body after experiencing sexual trauma.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Healing",
      date: "February 28, 2023",
      readTime: "12 min read",
    },
    {
      title: "The Art of Self-Pleasure: A Guide to Mindful Masturbation",
      excerpt: "Explore techniques to transform self-pleasure into a sacred and healing practice.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Self-Pleasure",
      date: "February 10, 2023",
      readTime: "10 min read",
    },
    {
      title: "Connecting with Your Divine Feminine Energy",
      excerpt: "Practical rituals and exercises to awaken and embody your feminine essence.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Divine Feminine",
      date: "January 25, 2023",
      readTime: "9 min read",
    },
    {
      title: "Communication in the Bedroom: Finding Your Voice",
      excerpt: "How to express your desires and boundaries with confidence and clarity.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Relationships",
      date: "January 12, 2023",
      readTime: "7 min read",
    },
    {
      title: "The Connection Between Sexual Energy and Creativity",
      excerpt: "Understanding how your sexual energy can fuel your creative pursuits and life force.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sexual Energy",
      date: "December 30, 2022",
      readTime: "11 min read",
    },
  ]

  const categories = [
    "All Categories",
    "Crystal Healing",
    "Healing",
    "Self-Pleasure",
    "Divine Feminine",
    "Relationships",
    "Sexual Energy",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-fuchsia-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">The Empowered Woman Blog</h1>
              <p className="text-gray-600 mb-8">
                Insights, practices, and wisdom to support your journey of sexual empowerment and feminine embodiment.
              </p>

              {/* Search bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Content upgrade banner */}
          <div className="mb-12">
            <ContentUpgradeBanner />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3 relative z-0">
              {/* Category filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category, i) => (
                  <Button
                    key={i}
                    variant={i === 0 ? "default" : "outline"}
                    className={i === 0 ? "bg-fuchsia-700 hover:bg-fuchsia-800" : ""}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Blog posts grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-fuchsia-700 text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button variant="link" className="p-0 text-fuchsia-700 hover:text-fuchsia-900">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* In-content lead magnet after 3rd post */}
              <div className="my-12">
                <InContentLeadMagnet />
              </div>

              {/* Load more button */}
              <div className="text-center mt-12">
                <Button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Sidebar opt-in */}
              <BlogSidebarOptIn />

              {/* Recent posts */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5">
                <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{post.title}</h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-700 hover:text-fuchsia-700"
                      >
                        {category}
                      </Link>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {Math.floor(Math.random() * 20) + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured workshop */}
              <div className="sticky bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Featured Workshop"
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Featured Workshop
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2">Sacred Sexuality Masterclass</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Join our live workshop and learn powerful practices to awaken your sexual energy.
                  </p>
                  <Button className="w-full bg-white text-fuchsia-900 hover:bg-white/90">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exit intent popup */}
        <ExitIntentPopup />
      </main>
      <SiteFooter />
    </div>
  )
}

