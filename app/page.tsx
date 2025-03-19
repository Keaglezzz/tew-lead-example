import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"
import Hero from "@/components/sections/hero"
import FeaturedProducts from "@/components/sections/featured-products"
import FeaturedCourses from "@/components/sections/featured-courses"
import Testimonials from "@/components/sections/testimonials"
import CTA from "@/components/sections/cta"
import EnhancedCrystalQuiz from "@/components/sections/enhanced-crystal-quiz"
import IntimateWorkshopPopup from "@/components/sections/intimate-workshop-popup"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <FeaturedCourses />
        <Testimonials />
        <CTA />
        <EnhancedCrystalQuiz />
        <IntimateWorkshopPopup />
      </main>
      <SiteFooter />
    </div>
  )
}

