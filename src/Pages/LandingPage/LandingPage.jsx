import FeaturesSection from "../../Components/Landing/FeaturesSection"
import HeroSection from "../../Components/Landing/HeroSection"
import StatsSection from "../../Components/Landing/StatsSection"
import Navbar from "../../Components/Layout/Navbar"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection/>
      <FeaturesSection/>
      {/* <AboutUs/>
      <Features/>
      <Technology/>
      <Testimonials/>
      <FAQSection/>
      <ContactUs/> */}
    
    </div>
  )
}

export default LandingPage
