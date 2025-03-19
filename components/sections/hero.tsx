"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your email service provider
    console.log("Submitted:", { firstName, email })
    setSubmitted(true)
    // Reset form after submission
    setFirstName("")
    setEmail("")
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero section with background image */}
      <div className="relative min-h-[90vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://d11n7da8rpqbjy.cloudfront.net/empoweredwoman/13968762145085-DSC00532-Edit.jpg"
            alt="The Empowered Woman"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Messaging */}
          <div className="text-white space-y-6 max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-700/90 text-white text-sm font-medium mb-2">
              <Sparkles className="w-4 h-4 mr-2" />
              CANADA'S LEADING SEXUAL EMPOWERMENT PLATFORM
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Embrace Your Divine Feminine Power
            </h1>

            <p className="text-xl md:text-2xl text-white/90">
              Connect with your body's wisdom and unlock your authentic sexual expression through our transformative
              courses and community.
            </p>

            <div className="pt-2 space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              <Button
                className="w-full sm:w-auto bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded-full px-8 py-6 text-lg"
                onClick={() => document.getElementById("lead-form")?.focus()}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Right column - Lead capture form */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 shadow-2xl max-w-md w-full mx-auto">
            {!submitted ? (
              <>
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Free Masterclass</h3>
                  <p className="text-white/80 mt-2">
                    "Hear the Voice of Your Pussy: 5 Practices to Connect with Your Sexual Wisdom"
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="lead-form">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-md w-full"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-md w-full"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      className="mt-1 border-white/50 data-[state=checked]:bg-fuchsia-700 data-[state=checked]:border-fuchsia-700"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-white/80">
                      I consent to receive emails about courses, events, and special offers. I can unsubscribe anytime.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white py-6 rounded-md text-lg"
                  >
                    Get Instant Access
                  </Button>
                </form>

                <p className="mt-4 text-center text-white/70 text-sm">
                  Join over 10,000 women who have transformed their relationship with their bodies
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fuchsia-700/30 mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">You're In!</h3>
                <p className="text-white/80 mt-2">
                  Check your email for access to your free masterclass. Be sure to check your promotions folder if you
                  don't see it.
                </p>
                <Button
                  className="mt-6 bg-white text-fuchsia-900 hover:bg-white/90"
                  onClick={() => (window.location.href = "/shop")}
                >
                  Explore Our Shop
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="bg-gradient-to-b from-black to-fuchsia-950 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white italic mb-4">
                "This course completely transformed my relationship with my body. I've never felt more connected to my
                feminine power."
              </p>
              <p className="text-white/80">— Sarah M., Vancouver</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

