import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import StatisticsSection from "@/components/StatisticsSection"
import SolutionSection from "@/components/SolutionSection"
import BenefitsSection from "@/components/BenefitsSection"
import AboutSection from "@/components/AboutSection"
import SupportersSection from "@/components/SupportersSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <SolutionSection />
      <BenefitsSection />
      <AboutSection />
      <SupportersSection />
      <Footer />
    </div>
  )
}

export default Index