import React from 'react'
import './FAQs.css'
import SectionHeading from '../SectionHeading'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../../data'
import FAQ from '../FAQ/FAQ'

const FAQs = () => {
  return (
    <section className='FAQs_area faqs'>
        <div className='container faqs__container'>
            <SectionHeading icon={<FaQuestion></FaQuestion>} title='FAQs'></SectionHeading>
            <div className='faqs__wrapper'>
                {
                    faqs.map(({id, question, answer}) => {
                        return <FAQ key={id} question={question} answer={answer}></FAQ>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs