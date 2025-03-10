import React from 'react'
import AboutSection from './about-card'
import ServicesCard from './services-card'
import ReasonCard from './reason-card'
import Testimonials from './testimonials'
import ContactCard from './contact-card'
import Header from "../components/header"


const Home = () => {
  return (
    <div>
      <Header/>
      <AboutSection />
      <ServicesCard />
      <ReasonCard />
      <Testimonials />
      <ContactCard/>
    </div>
  )
}

export default Home