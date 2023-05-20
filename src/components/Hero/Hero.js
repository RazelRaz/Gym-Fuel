import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import HeroImg from '../../images/hero.png';

const Hero = () => {
    return (
        <div className='hero_area main__header'>
            <div className='container main__header_container'>
                <div className='main__header_left'>
                    <h4>#30DaysWorkOutChallenge</h4>
                    <h1>Join The Legends Of The Fitness World</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem nam ad dolores praesentium provident.</p>
                    <div className='hero_btn'>
                        <Link to='/plans' className='btn lg'>Get Started</Link>
                    </div>
                </div>
                <div className='main__header_right'>
                    <div className='main__header_circle'></div>
                    <div className='main__header_image'>
                        <img src={HeroImg} alt="Human"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;