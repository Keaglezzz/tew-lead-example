"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Download, ArrowRight, X } from "lucide-react"

// Content upgrade banner for top of blog listing page
export function ContentUpgradeBanner() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Content upgrade submitted:", email)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <div className="w-full bg-gradient-to-r from-fuchsia-900 to-fuchsia-700 rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-8 sm:px-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white space-y-2 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Free Sexual Wellness Guide</h3>
          <p className="text-white/80 max-w-md">
            Download our comprehensive guide to reconnecting with your body's wisdom and enhancing your pleasure.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-w-[240px]"
              required
            />
            <Button type="submit" className="bg-white text-fuchsia-900 hover:bg-white/90">
              Get Free Guide
            </Button>
          </form>
        ) : (
          <div className="bg-white/20 rounded-lg px-4 py-3 text-white">
            <p className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Check your email for your guide!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// In-content lead magnet to be placed between blog posts
export function InContentLeadMagnet() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("In-content lead magnet submitted:", email)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <Card className="border-fuchsia-200 bg-gradient-to-br from-white to-fuchsia-50">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-800 text-sm font-medium">
              <BookOpen className="h-4 w-4 mr-2" />
              Exclusive Content
            </div>
            <h3 className="text-xl font-bold text-gray-900">5 Intimate Practices for Deeper Connection</h3>
            <p className="text-gray-600">
              Join our community of empowered women and get access to exclusive content, special offers, and early
              access to new courses.
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
                  Join Now
                </Button>
              </form>
            ) : (
              <div className="bg-green-100 rounded-lg px-4 py-3 text-green-800 flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Welcome to our community! Check your email.
              </div>
            )}
          </div>

          <div className="w-32 h-32 rounded-full bg-fuchsia-200 flex items-center justify-center flex-shrink-0">
            <Download className="h-12 w-12 text-fuchsia-700" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Sticky sidebar opt-in for individual blog post pages
export function BlogSidebarOptIn() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sidebar opt-in submitted:", email)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <div className="sticky top-24 bg-white border border-gray-200 rounded-lg shadow-md p-5 max-w-xs">
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <BookOpen className="h-8 w-8 text-fuchsia-700" />
        </div>
        <h4 className="font-bold text-gray-900">Deepen Your Practice</h4>
        <p className="text-sm text-gray-600 mt-1">
          Get our weekly insights on feminine embodiment and sexual wellness.
        </p>
      </div>

      {!submitted ? (
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
            Subscribe
          </Button>
          <p className="text-xs text-center text-gray-500">No spam, unsubscribe anytime.</p>
        </form>
      ) : (
        <div className="bg-green-100 rounded-lg px-4 py-3 text-green-800 text-sm text-center">
          You're subscribed! Check your inbox for a welcome gift.
        </div>
      )}

      <div className="mt-5 pt-5 border-t border-gray-200">
        <h5 className="font-medium text-gray-900 mb-3">Popular Articles</h5>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="text-fuchsia-700 hover:text-fuchsia-900 flex items-center">
              <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
              <span>Awakening Your Sensual Self</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-fuchsia-700 hover:text-fuchsia-900 flex items-center">
              <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
              <span>Healing Sexual Trauma</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-fuchsia-700 hover:text-fuchsia-900 flex items-center">
              <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
              <span>Crystal Rituals for Intimacy</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

// Exit intent popup for blog visitors
export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(true) // For demo purposes, set to true
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Exit intent popup submitted:", email)
    setSubmitted(true)

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

        <div className="p-6">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fuchsia-100 mb-4">
                  <BookOpen className="h-8 w-8 text-fuchsia-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Before You Go...</h3>
                <p className="text-gray-600 mt-2">
                  Get our exclusive guide "7 Sacred Practices for Sexual Healing" delivered straight to your inbox.
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
                  Send Me the Guide
                </Button>

                <p className="text-xs text-center text-gray-500">
                  By signing up, you'll also receive our newsletter with exclusive content and special offers.
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
              <h4 className="text-xl font-bold text-gray-900">Thank You!</h4>
              <p className="text-gray-600 mt-2">
                Your guide is on its way to your inbox. Be sure to check your promotions folder if you don't see it.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

