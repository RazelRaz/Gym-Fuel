import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
const FAQ = ({question, answer}) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article className='faq' onClick={() => setIsAnswerShowing(prev => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className='faq__icon'>
          {
            isAnswerShowing ? <FaMinus></FaMinus> : <FaPlus></FaPlus>
          }
          
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
      
    </article>
  )
}

export default FAQ

