import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export default function FeaturedCourses() {
  const courses = [
    {
      title: "Awakening Your Sensual Self",
      instructor: "Sarah Johnson",
      image: "/placeholder.svg?height=400&width=600",
      description: "A 6-week journey to reconnect with your body's wisdom and unlock your authentic sexual expression.",
    },
    {
      title: "Sacred Sexuality Practices",
      instructor: "Emily Williams",
      image: "/placeholder.svg?height=400&width=600",
      description: "Learn ancient and modern techniques to harness your sexual energy for healing and empowerment.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transformative Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Embark on a journey of self-discovery and sexual empowerment with our expert-led courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">5.0 (124 reviews)</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Instructor: {course.instructor}</span>
                  <Button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white">Learn More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses">
            <Button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded-full px-6 py-6">
              Explore All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

