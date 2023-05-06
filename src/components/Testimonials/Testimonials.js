import React from 'react';
import './Testimonials.css';
import SectionHeading from '../SectionHeading';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaQuoteLeft } from 'react-icons/fa';
import Card from '../../UI/Card/Card';
import {testimonials} from '../../data';
import { useState } from 'react';

const Testimonials = () => {
    const [index, setIndex] = useState(1);
    const {name, quote, job, avatar} = testimonials[index];
 
  return (
    <section className='testimonials'>
        <div className='container testimonials__container'>
            <SectionHeading icon={<FaQuoteLeft></FaQuoteLeft>} title='Testimonials' className='testimonials__head'></SectionHeading>
            <Card className='testimonial'>
                <div className='testimonial__avatar'>
                    <img src={avatar} alt={name} />
                </div>
                <p className='testimonial__quote'>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className='testimonial__title'>{job}</small>
            </Card>
            <div className='testimonials__btn_container'>
                <button className='testimonials__btn'><FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft></button>
                <button className='testimonials__btn'><FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials