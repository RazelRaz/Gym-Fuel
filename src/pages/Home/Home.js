import React from 'react';
import Hero from '../../components/Hero/Hero';
import Programs from '../../components/Programs/Programs';
import Values from '../../components/Values/Values';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Programs></Programs>
            <Values></Values>
        </div>
    );
};

export default Home;