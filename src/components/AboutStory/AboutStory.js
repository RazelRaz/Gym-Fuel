import React from 'react'
import './AboutStory.css'
import story_image from '../../images/ourStory.jpg'

const AboutStory = () => {
  return (
    <section className='about__story'>
        <div className='container about__story_container'>
            <div className='about_section_image'>
                <img src={story_image} alt='Story image' />
            </div>
            <div className='about_section_content'>
                <h1>Our Story</h1>
                <p>Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you’re just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.</p>
                <p>In September 1997 Life Fitness Australia was formed to act as the exclusive Australian distributor for Life Fitness and Hammer Strength products. Beginning with only five employees. </p>
                <p>Immerse yourself in the Life Fitness experience at one of our premium showrooms, located in Victoria, New South Wales, Queensland and Western Australia.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutStory