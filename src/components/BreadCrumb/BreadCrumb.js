import React from 'react'
import './BreadCrumb.css'

const BreadCrumb = ({ title, image, children }) => {
  return (
    <header className='header'>
        <div className='header__container'>
            <div className='header__container_bg'>
                <img src={image} alt='image' />
            </div>
            <div className='header__content'>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default BreadCrumb
