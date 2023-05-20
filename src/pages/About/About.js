import React from 'react';
import './About.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import AboutHero from '../../images/abouthero.jpg'

const About = () => {
    return (
        <>
            <BreadCrumb title="About Us" image={AboutHero}>
            You’re going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn’t parallel to how heavy you lift, it’s parallel to how hard you work.
            </BreadCrumb>
        </>
    );
};

export default About;