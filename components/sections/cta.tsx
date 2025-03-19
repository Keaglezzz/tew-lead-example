import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-fuchsia-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Join thousands of women who have transformed their relationship with their bodies and reclaimed their sexual
          power.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-fuchsia-900 hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-lg">
            Join the Membership
          </Button>
          <Button
            variant="default"
            className="bg-fuchsia-500 text-white hover:bg-fuchsia-400 rounded-full px-8 py-6 text-lg font-semibold shadow-lg border-2 border-fuchsia-400"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </section>
  )
}

