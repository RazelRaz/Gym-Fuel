import React from 'react';
import './Gallery.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import GymHead from '../../images/gymGalleryHead.jpg';
import GalleryImg from '../../components/GalleryImg/GalleryImg';

const Gallery = () => {
    

    return (
        <>
            <BreadCrumb title="Gallery" image={GymHead}>
            Physical and mental fitness is of utmost importance. Getting to the gym for workout and prioritizing your fitness isn’t easy.
            </BreadCrumb>
            <GalleryImg></GalleryImg>
        </>
    );
};

export default Gallery;