"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Calendar } from "lucide-react"
import Image from "next/image"

export default function IntimateWorkshopPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    // Show popup when user scrolls down for the first time
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 300 && !localStorage.getItem("workshopPopupShown")) {
        setHasScrolled(true)
        setIsOpen(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasScrolled])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your email service provider
    console.log("Workshop registration:", { name, email })
    setSubmitted(true)

    // Store in localStorage to prevent showing again
    localStorage.setItem("workshopPopupShown", "true")

    // Close popup after 5 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 5000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full relative overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="grid md:grid-cols-2">
          {/* Image section */}
          <div className="relative h-64 md:h-auto overflow-hidden bg-fuchsia-900">
            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/90 to-transparent z-10"></div>
            <Image
              src="https://d11n7da8rpqbjy.cloudfront.net/empoweredwoman/13968762145085-DSC00532-Edit.jpg"
              alt="Intimate Workshop"
              fill
              className="object-cover object-center opacity-60"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-white text-xl md:text-2xl font-bold">Exclusive Virtual Workshop</h3>
              <p className="text-white/80 mt-2">Limited spots available</p>
            </div>
          </div>

          {/* Form section */}
          <div className="p-6 md:p-8">
            {!submitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-800 text-sm font-medium mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Live Event: March 25th, 7PM EST
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    "Sacred Sexuality: Connecting with Your Divine Feminine"
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Join our intimate 90-minute workshop and learn powerful practices to awaken your sexual energy and
                    deepen your connection to your body's wisdom.
                  </p>

                  <ul className="mt-4 space-y-2">
                    {[
                      "Guided meditation for sexual healing",
                      "Crystal practices for enhanced pleasure",
                      "Q&A with our founder",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-fuchsia-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                    required
                  />

                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white py-5 rounded-md"
                  >
                    Reserve My Spot (Free)
                  </Button>

                  <p className="text-xs text-center text-gray-500">
                    By registering, you agree to receive emails about our courses and offerings. We respect your
                    privacy.
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
                <h4 className="text-xl font-bold text-gray-900">You're Registered!</h4>
                <p className="text-gray-600 mt-2">
                  Check your email for workshop details and your exclusive calendar invite.
                </p>
                <p className="text-gray-600 mt-4">
                  <span className="font-medium">Bonus:</span> We've included a special 15% discount code for our crystal
                  collection in your confirmation email.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

