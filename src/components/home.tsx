"use client"

import React from 'react'
import MyNavbar from './HomeNavBar/navbar'
import Coursel from './coursel/coursel'
import OrganizerGrid from './cards/card'
import EventCards from './trending/trendingCards'
import PromoBanner from './promobanner/promobanner'
import UpdateEvents from "./EventsCards/EventsCards"
import TestimonialContainer from './promobanner/testominialcard'
import Footer from './Footer/footer'
import BlogCarousel from './blogs/Blog'
import WhyEfestoo from './Features/Features'

function HomePage() {
  return (
    <>
      <MyNavbar />
      <Coursel />
      <OrganizerGrid />
      <UpdateEvents />
      <EventCards />
      <BlogCarousel />
      <PromoBanner />
      <WhyEfestoo />
      <TestimonialContainer />
      <Footer />

    </>
  )
}

export default HomePage
