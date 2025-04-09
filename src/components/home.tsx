"use client"

import React from 'react'
import MyNavbar from './HomeNavBar/navbar'
import OrganizerGrid from './cards/card'
import EventCards from './trending/trendingCards'
import PromoBanner from './promobanner/promobanner'
import UpdateEvents from "./EventsCards/EventsCards"
import TestimonialContainer from './promobanner/testominialcard'
import Footer from './Footer/footer'
import BlogCarousel from './blogs/Blog'
import WhyEfestoo from './Features/Features'
import Coursel1 from './coursel/coursel1'

function HomePage() {
  return (
    <>
      <MyNavbar />
      <Coursel1 />
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
