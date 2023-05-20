import React from 'react'
import './OurMission.css'
import our_mission_image from '../../images/our_mission.jpg'

const OurMission = () => {
  return (
    <section className='our__mission'>
        <div className='container our__mission_container'>
            <div className='our__mission_content'>
                <h1>Our Mission</h1>
                <p>Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you’re just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.</p>
                <p>In September 1997 Life Fitness Australia was formed to act as the exclusive Australian distributor for Life Fitness and Hammer Strength products. Beginning with only five employees. </p>
                <p>Immerse yourself in the Life Fitness experience at one of our premium showrooms, located in Victoria, New South Wales, Queensland and Western Australia.</p>
            </div>
            <div className='our__mission_image'>
                <img src={our_mission_image} alt='Story image' />
            </div>
        </div>
    </section>
  )
}

export default OurMission