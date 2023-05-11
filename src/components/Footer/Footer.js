import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='container footer__container'>
            <article>
                <Link to='/' className='logo'> 
                    <h2>GYMFUEL</h2>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem nam ad dolores praesentium provident.</p>
            </article>
        </div>
    </footer>
  )
}

export default Footer