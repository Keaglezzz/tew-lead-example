"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { X, ChevronRight, Diamond, Tag } from "lucide-react"
import Image from "next/image"

export default function EnhancedCrystalQuiz() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      question: "What area of your life are you seeking to enhance?",
      options: ["Sexual confidence", "Intimacy with partner", "Self-pleasure", "Healing past trauma"],
    },
    {
      question: "How would you describe your energy levels?",
      options: ["High and vibrant", "Fluctuating", "Blocked or stagnant", "Low and depleted"],
    },
    {
      question: "Which emotion do you most want to cultivate?",
      options: ["Passion", "Self-love", "Trust", "Sensuality"],
    },
  ]

  // Crystal recommendations based on answers
  const crystalRecommendations = [
    {
      name: "Rose Quartz",
      description:
        "The stone of unconditional love, perfect for enhancing self-love and opening the heart to deeper intimacy.",
      image: "/placeholder.svg?height=200&width=200",
      category: "rose-quartz",
    },
    {
      name: "Carnelian",
      description: "A vibrant crystal that stimulates passion, creativity, and sexual energy for enhanced pleasure.",
      image: "/placeholder.svg?height=200&width=200",
      category: "carnelian",
    },
    {
      name: "Amethyst",
      description:
        "A powerful healing crystal that helps release trauma and promotes spiritual growth and inner peace.",
      image: "/placeholder.svg?height=200&width=200",
      category: "amethyst",
    },
    {
      name: "Black Obsidian",
      description: "A protective stone that helps release negative energy and past trauma, creating space for healing.",
      image: "/placeholder.svg?height=200&width=200",
      category: "obsidian",
    },
  ]

  // Determine which crystal to recommend based on answers
  const getCrystalRecommendation = (): typeof crystalRecommendations[number] => {
    // This is a simplified algorithm - in reality, you'd have more complex logic
    if (answers[0] === "Sexual confidence" || answers[2] === "Passion") {
      return crystalRecommendations[1] // Carnelian
    } else if (answers[0] === "Intimacy with partner" || answers[2] === "Self-love") {
      return crystalRecommendations[0] // Rose Quartz
    } else if (answers[0] === "Healing past trauma") {
      return crystalRecommendations[3] // Black Obsidian
    } else {
      return crystalRecommendations[2] // Amethyst
    }
  }

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [step]: answer })
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Show results immediately after answering the last question
      setShowResults(true)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your email service provider
    console.log("Quiz submitted:", { name, email, answers })
    setSubmitted(true)

    // Reset after 5 seconds
    setTimeout(() => {
      setIsOpen(false)
      setStep(0)
      setAnswers({})
      setEmail("")
      setName("")
      setSubmitted(false)
      setShowResults(false)

      // Store in localStorage to prevent showing again in this session
      localStorage.setItem("quizCompleted", "true")
    }, 5000)
  }

  // Show button only if quiz not completed
  if (!isOpen && localStorage.getItem("quizCompleted")) return null

  const recommendedCrystal = getCrystalRecommendation()
  
  return (
    <div className="fixed bottom-8 right-8 z-40">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded-full px-6 py-6 shadow-lg flex items-center group"
        >
          <Diamond className="mr-2 h-5 w-5 group-hover:animate-pulse" />
          Discover Your Perfect Crystal
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-2xl w-full sm:w-[400px] overflow-hidden">
          <div className="bg-gradient-to-r from-fuchsia-800 to-fuchsia-600 p-4 text-white flex justify-between items-center">
            <h3 className="font-bold flex items-center">
              <Diamond className="mr-2 h-5 w-5" />
              Crystal Matchmaker Quiz
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-fuchsia-700/50"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-5">
            {!showResults && step < questions.length && (
              <div className="space-y-4">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>
                    Question {step + 1} of {questions.length}
                  </span>
                  <span>{Math.round((step / questions.length) * 100)}% complete</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-fuchsia-600 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>

                <h4 className="text-lg font-medium text-gray-900 mt-4">{questions[step].question}</h4>

                <RadioGroup className="gap-3">
                  {questions[step].options.map((option, i) => (
                    <div key={i} className="flex items-center">
                      <RadioGroupItem value={option} id={`option-${step}-${i}`} className="peer sr-only" />
                      <Label
                        htmlFor={`option-${step}-${i}`}
                        className="flex items-center justify-between w-full p-4 cursor-pointer rounded-lg border border-gray-200 peer-checked:border-fuchsia-600 peer-checked:bg-fuchsia-50 hover:bg-gray-50"
                        onClick={() => handleAnswer(option)}
                      >
                        {option}
                        <ChevronRight className="h-5 w-5 text-gray-400 peer-checked:text-fuchsia-600" />
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {showResults && !submitted && (
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Your Perfect Crystal Match</h4>
                  <div className="w-32 h-32 mx-auto relative mb-3">
                    <Image
                      src={recommendedCrystal.image || "/placeholder.svg"}
                      alt={recommendedCrystal.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h5 className="text-lg font-semibold text-fuchsia-700">{recommendedCrystal.name}</h5>
                  <p className="text-gray-600 text-sm mt-2 mb-4">{recommendedCrystal.description}</p>
                </div>

                <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-fuchsia-700" />
                    Special Offer
                  </h5>
                  <p className="text-gray-600 text-sm mt-1 mb-3">
                    Get 10% off all {recommendedCrystal.name} products! Enter your details to receive your discount
                    code.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
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
                      className="w-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white py-4 rounded-md"
                    >
                      Get My 10% Discount
                    </Button>

                    <p className="text-xs text-center text-gray-500">
                      You'll also receive our newsletter with exclusive content and offers. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </div>
            )}

            {submitted && (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fuchsia-100 mb-4">
                  <Diamond className="h-8 w-8 text-fuchsia-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Discount Code Sent!</h4>
                <p className="text-gray-600 mt-2">
                  Check your email for your 10% discount code on {recommendedCrystal.name} products and start shopping
                  now!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

