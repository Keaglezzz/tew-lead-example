"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, ShoppingBag, Sparkles, X, Tag } from "lucide-react"

// First-time visitor discount popup
export function FirstTimeVisitorDiscount() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds if it hasn't been shown before
    if (!localStorage.getItem("discountPopupShown")) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("First-time visitor discount submitted:", email)
    setSubmitted(true)

    // Store in localStorage to prevent showing again
    localStorage.setItem("discountPopupShown", "true")

    // Close popup after 3 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="bg-gradient-to-r from-fuchsia-700 to-purple-700 p-4 text-white text-center">
          <h3 className="font-bold text-xl">Welcome to Our Shop</h3>
        </div>

        <div className="p-6">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fuchsia-100 mb-4">
                  <Tag className="h-8 w-8 text-fuchsia-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">15% Off Your First Order</h4>
                <p className="text-gray-600 mt-2">
                  Sign up to receive your exclusive discount code and be the first to know about new products and
                  special offers.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />

                <Button type="submit" className="w-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white py-5 rounded-md">
                  Get My 15% Discount
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Your discount code will be sent immediately to your email.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900">Discount Code Sent!</h4>
              <p className="text-gray-600 mt-2">Check your email for your 15% discount code. Valid for 7 days.</p>
              <Button className="mt-6 bg-fuchsia-700 hover:bg-fuchsia-800 text-white" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Product recommendation banner
export function ProductRecommendationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-fuchsia-100 via-pink-50 to-purple-100 border border-fuchsia-200 rounded-lg overflow-hidden shadow-md relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-soft-light"></div>
      <div className="px-6 py-8 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-800 text-sm font-medium border border-fuchsia-200">
            <Sparkles className="h-4 w-4 mr-2" />
            Find Your Perfect Match
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Not sure which crystal is right for you?</h3>
          <p className="text-gray-600 max-w-md">
            Take our quick quiz to discover which crystal will best enhance your sexual energy.
          </p>
        </div>
        
        <Button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white px-6 py-6 shadow-lg">
          Take the Quiz
        </Button>
      </div>
    </div>
  )
}

// Abandoned cart recovery
export function AbandonedCartRecovery() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Abandoned cart recovery submitted:", email)
    setSubmitted(true)
    setEmail("")

    // Hide after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  // This will be triggered from the navbar
  useEffect(() => {
    // Listen for a custom event from the cart icon
    const handleCartClick = () => {
      setIsVisible(true)
    }

    window.addEventListener("cartIconClicked", handleCartClick)
    return () => window.removeEventListener("cartIconClicked", handleCartClick)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 right-0 m-6 z-40 max-w-sm w-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-100">
      <div className="bg-fuchsia-700 p-3 text-white flex justify-between items-center">
        <h4 className="font-medium flex items-center">
          <ShoppingBag className="h-4 w-4 mr-2" />
          Save Your Shopping Cart
        </h4>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-fuchsia-800/50 h-8 w-8"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4">
        {!submitted ? (
          <>
            <p className="text-gray-600 text-sm mb-3">
              Enter your email to save your cart and get a special 10% discount when you complete your purchase.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />

              <Button type="submit" className="w-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white">
                Save My Cart
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-2">
            <p className="text-gray-900 font-medium">Your cart is saved! Check your email for your discount code.</p>
          </div>
        )}
      </div>
    </div>
  )
}

// VIP early access signup
export function VIPEarlyAccess() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("VIP early access submitted:", email)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <Card className="border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-purple-50">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-600 flex items-center justify-center flex-shrink-0">
            <Gift className="h-12 w-12 text-white" />
          </div>

          <div className="flex-1 space-y-3 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-800 text-sm font-medium">
              <Sparkles className="h-4 w-4 mr-2" />
              VIP Access
            </div>
            <h3 className="text-xl font-bold text-gray-900">Join Our VIP List</h3>
            <p className="text-gray-600">
              Be the first to know about new product launches, exclusive discounts, and limited edition crystal
              collections.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white">
                  Join VIP List
                </Button>
              </form>
            ) : (
              <div className="bg-green-100 rounded-lg px-4 py-3 text-green-800 flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You're on the list! Watch for VIP-only offers soon.
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

