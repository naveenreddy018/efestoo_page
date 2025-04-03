"use client"

import React from 'react'
import MyNavbar from './HomeNavBar/navbar'
import Coursel from './coursel/coursel'
import OrganizerGrid from './cards/card'
import PaginationRounded from './pagination/pagination'
import EventCards from './trending/trendingCards'
import PromoBanner from './promobanner/promobanner'

import TestimonialContainer from './promobanner/testominialcard'
import Footer from './Footer/footer'

function HomePage() {
  return (
    <>
    <MyNavbar />
    <Coursel />
    <OrganizerGrid />
    <PaginationRounded />
    <EventCards />
    <PromoBanner />
    <TestimonialContainer />
    <Footer />

    </> 
  )
}

export default HomePage
