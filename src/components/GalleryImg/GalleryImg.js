import React from 'react'
import './GalleryImg.css'

const GalleryImg = () => {

const galleryLength = 15;
const images = []

for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
}
console.log(images);

  return (
    <section className='gallery'>
        <div className='container gallery__container'>
            {
                images.map((image, index) => {
                    return <article key={index}>
                            <img src={image} alt={`Gallery Image ${index + 1}`} />
                        </article>
                })
            }
        </div>
    </section>
  )
}

export default GalleryImg