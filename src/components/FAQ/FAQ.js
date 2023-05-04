import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
const FAQ = ({question, answer}) => {
  return (
    <article className='faq'>
      <div>
        <h4>{question}</h4>
        <button className='faq__icon'>
          <FaPlus></FaPlus>
        </button>
      </div>
      <p>{answer}</p>
    </article>
  )
}

export default FAQ

