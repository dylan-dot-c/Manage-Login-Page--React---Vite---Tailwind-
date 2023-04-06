
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

import '@splidejs/react-splide/css';

export default function App() {

  return (
    <>
      <Navbar />

      
      
      <Hero />
      <Features/>
      <Testimonials />
      <CTA />
      <Footer />

    </>
  )
}