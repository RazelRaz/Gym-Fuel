import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className='container footer__container'>
            <article>
                <Link to='/' className='logo'> 
                    <h2>GYMFUEL</h2>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem nam ad dolores praesentium provident.
                </p>
                <div className='footer_socials'>
                    <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin></FaLinkedin></a>
                    <a href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener'><FaFacebook></FaFacebook></a>
                    <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'><FaTwitter></FaTwitter></a>
                    <a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'><FaInstagram></FaInstagram></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/s">Support</Link>
            </article>
        </div>
        <div className='footer_copyright'>
            <small>2023 Razel Ahmed &copy; All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer