import React from 'react'
import { Link } from 'react-router-dom'
import './NothingFound.css'

const NothingFound = () => {
  return (
    <section className='notfound_area'>
        <div className='container notfound__container'>
            <h2>Page Not Found</h2>
            <Link to='/' className='btn'>Go Back To Home</Link>
        </div>
    </section>
  )
}

export default NothingFound