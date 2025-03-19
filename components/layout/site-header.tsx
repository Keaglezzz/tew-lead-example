"use client"

import Link from "next/link"
import { ShoppingCart, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top banner */}
      <div className="bg-fuchsia-700 text-white text-center py-2 px-4">
        <p className="text-sm">
          Learn to hear the Voice of Your Pussy{" "}
          <Link href="/courses" className="underline font-medium">
            Click here to get started.
          </Link>
        </p>
      </div>

      {/* Main navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-fuchsia-900">
              The Empowered Woman
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/courses" className="text-gray-700 hover:text-fuchsia-700 font-medium">
                Online Courses
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-fuchsia-700 font-medium">
                Shop
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-fuchsia-700 font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-fuchsia-700 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-fuchsia-700 font-medium">
                Contact
              </Link>
            </nav>

            {/* User actions */}
            <div className="flex items-center space-x-4">
              <Link href="/account" className="text-gray-700 hover:text-fuchsia-700">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-fuchsia-700 relative"
                onClick={(e) => {
                  e.preventDefault()
                  // Dispatch a custom event that the AbandonedCartRecovery component will listen for
                  window.dispatchEvent(new Event("cartIconClicked"))
                }}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                <span className="absolute -top-2 -right-2 bg-fuchsia-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </Link>

              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4 space-y-3">
              <Link
                href="/courses"
                className="block text-gray-700 hover:text-fuchsia-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Online Courses
              </Link>
              <Link
                href="/shop"
                className="block text-gray-700 hover:text-fuchsia-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-fuchsia-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-fuchsia-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-fuchsia-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

