import React, { useEffect } from 'react'
import Slider from './components/Slider'
import Stats from './components/Stats'
import CategoryWiseCards from './components/CategoryWiseCards'
import BestSellingProducts from './components/BestSellingProducts'
import $ from 'jquery'


function Home() {

  return (
    <>
      <Slider></Slider>
      <Stats></Stats>
      <CategoryWiseCards></CategoryWiseCards>
      <BestSellingProducts></BestSellingProducts>
    </>
  )
}

export default Home