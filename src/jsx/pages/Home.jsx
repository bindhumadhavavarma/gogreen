import React from 'react'
import Nav from '../layouts/Nav'
import Carousel from '../components/Carousel'
import About from '../components/About'

function Home() {
  return (
    <>
      <Nav></Nav>
      <Carousel></Carousel>
      <About></About>
    </>
  )
}

export default Home