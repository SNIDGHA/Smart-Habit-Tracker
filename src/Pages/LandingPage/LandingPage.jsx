import AboutUsSection from "../../Components/Landing/AboutUsSection"
import ContactUs from "../../Components/Landing/ContactUs"
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
      <AboutUsSection/>
      <ContactUs/>
      {/*
      <Technology/>
      <Testimonials/>
      <FAQSection/>
      <ContactUs/> */}
    
    </div>
  )
}

export default LandingPage
