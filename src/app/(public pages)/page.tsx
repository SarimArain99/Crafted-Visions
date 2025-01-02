import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Projects from '@/components/Projects'
import React from 'react'

function page() {
  return (
    <div className=' bg-[#0A001B]'>
      <Header/>
      <HeroSec />
      <Projects/>
      <Footer/>
    </div>
  )
}

export default page