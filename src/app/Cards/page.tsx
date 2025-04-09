"use client"

import React from 'react'
import MyNavbar from '@/components/HomeNavBar/navbar'
import Coursel from '@/components/coursel/coursel'

import EventCards from '@/components/trending/trendingCards'
import PromoBanner from '@/components/promobanner/promobanner'

import TestimonialContainer from '@/components/promobanner/testominialcard'
import Footer from '@/components/Footer/footer'
import BlogCarousel from '@/components/blogs/Blog'
import WhyEfestoo from '@/components/Features/Features'
import EventPage from '@/components/SubCards/subCards'

function CardsPage() {
  return (
    <div>
      <MyNavbar />
      <MyNavbar />
      <Coursel />
      <EventPage />
      <EventCards />
      <PromoBanner />
      <TestimonialContainer />
      <Footer />
    </div>
  )
}

export default CardsPage
