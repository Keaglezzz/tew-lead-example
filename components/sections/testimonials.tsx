import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This course completely transformed my relationship with my body. I've never felt more connected to my feminine power.",
      name: "Sarah M.",
      location: "Vancouver",
    },
    {
      quote:
        "The crystal products have been life-changing for my intimate practice. I feel more pleasure and connection than ever before.",
      name: "Jessica T.",
      location: "Toronto",
    },
    {
      quote:
        "Learning to hear the voice of my pussy has been the most empowering experience of my life. I finally feel at home in my body.",
      name: "Michelle K.",
      location: "Montreal",
    },
  ]

  return (
    <section className="py-16 bg-fuchsia-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from women who have transformed their relationship with their bodies and sexuality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="text-sm text-gray-600">
                <p className="font-medium">{testimonial.name}</p>
                <p>{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

