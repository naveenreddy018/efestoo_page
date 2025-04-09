'use client'

import React from 'react'
import MyNavbar from '@/components/HomeNavBar/navbar'
import Coursel from '@/components/coursel/coursel'
import OrganizerGrid from '@/components/cards/card'
import PaginationRounded from '@/components/pagination/pagination'
import EventCards from '@/components/trending/trendingCards'
import PromoBanner from '@/components/promobanner/promobanner'

import TestimonialContainer from '@/components/promobanner/testominialcard'
import Footer from '@/components/Footer/footer'

import WhyEfestoo from '@/components/Features/Features'
import Cards from '@/components/LatestEvents/LatestEvents'
import LatestCards from '@/components/LatestEvents/LatestEvents'


function  LatestEvent() {
  return (
    <div>
      <MyNavbar />
      <MyNavbar />
      <Coursel />
      <LatestCards />
      <EventCards />
      <PromoBanner />
      <TestimonialContainer />
      <Footer />
    </div>
  )
}

export default LatestEvent;
