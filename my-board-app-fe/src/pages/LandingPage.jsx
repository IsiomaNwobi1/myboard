import React from 'react'
import { Navbar } from '../components/LandingPage/Header/Navbar'
import { Hero } from '../components/LandingPage/Body/Hero'
import { Footer } from '../components/LandingPage/Footer/Footer'
import { Features } from '../components/LandingPage/Body/Features'
import { Offer } from '../components/LandingPage/Body/Offer'

export const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <Offer />
        <Footer />
    </>
  )
}
