import React from 'react'
import { trainers } from '../../data'
import Trainer from '../Trainer/Trainer'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import './Instructors.css'

const Instructors = () => {
  return (
    <section className='trainers'>
        <div className='container trainers__container'>
            {
                trainers.map(({id, image, name, job, socials}) => {
                    return <Trainer key={id} image={image} name={name} job={job} 
                    socials={[
                        {icon: <FaInstagram></FaInstagram>, link: socials[0]},
                        {icon: <FaTwitter></FaTwitter>, link: socials[1]},
                        {icon: <FaFacebook></FaFacebook>, link: socials[2]},
                        {icon: <FaLinkedin></FaLinkedin>, link: socials[3]}
                    ]}
                    
                    ></Trainer>
                })
            }
        </div>
    </section>
  )
}

export default Instructors