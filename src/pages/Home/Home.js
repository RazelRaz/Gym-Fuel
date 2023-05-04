import React from 'react';
import Hero from '../../components/Hero/Hero';
import Programs from '../../components/Programs/Programs';
import Values from '../../components/Values/Values';
import './Home.css'
import FAQs from '../../components/FAQs/FAQs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Programs></Programs>
            <Values></Values>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;