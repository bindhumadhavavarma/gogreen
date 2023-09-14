import React from 'react'
import Carousel from '../components/Carousel'
import About from '../components/About'
import TeamCard from '../components/TeamCard'
import pic1 from "../img/teamMadhav.jpg"
import pic2 from "../img/teamTangila.jpg"
import pic3 from "../img/teammate-male.png"
import pic4 from "../img/teamSubh.jpg"
import pic5 from "../img/teamAayush.jpg"
import pic6 from "../img/teamShefali.jpg"
import pic7 from "../img/teamMeda.jpg"
import Navbar from '../layouts/Navbar'

function Home() {
  return (
    <>
    <Navbar></Navbar>
      <Carousel></Carousel>
      <About></About>
      <div class="container-xxl py-5" id="team">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "600px"}}>
                <h6 class="text-primary">Team Members</h6>
                <h1 class="mb-4"><span style={{color:"#ED1C24"}}>Go</span><span style={{color:"#FFD500"}}>Green</span> Team Members</h1>
            </div>
            <div class="row g-4 justify-content-center">
                <TeamCard img={pic1} fullname="Bindhu Madhava Varma" designation="Associate Software Engineer"></TeamCard>
                <TeamCard img={pic2} fullname="Tangilla Esha Srinidhi" designation="Associate Software Engineer"></TeamCard>
                <TeamCard img={pic3} fullname="Saumya Jain" designation="Associate Software Engineer"></TeamCard>
                <TeamCard img={pic4} fullname="Shubhanshu Dwivedi" designation="Associate Software Engineer"></TeamCard>
                <TeamCard img={pic5} fullname="Ayush Chakladar" designation="Associate Software Engineer"></TeamCard>
                <TeamCard img={pic6} fullname="Shefali Gosain" designation="Associate Software Engineer"></TeamCard>
                <TeamCard img={pic7} fullname="Sathvika Meda" designation="Associate Software Engineer"></TeamCard>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home