import React from 'react';
import './Testimonials.css';
import SectionHeading from '../SectionHeading';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaQuoteLeft } from 'react-icons/fa';
import Card from '../../UI/Card/Card';
import {testimonials} from '../../data';
import { useState } from 'react';

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const {name, quote, job, avatar} = testimonials[index];

    // testimonial left right 
    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);
        if(index <= 0 ){
            setIndex(testimonials.length - 1)
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);
        if(index >= testimonials.length - 1){
            setIndex(0);
        }
    }
 
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
                <button className='testimonials__btn' onClick={prevTestimonialHandler}><FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft></button>
                <button className='testimonials__btn' onClick={nextTestimonialHandler}><FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials