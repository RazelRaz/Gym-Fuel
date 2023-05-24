import React from 'react';
import './Trainers.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import trainers from '../../images/trainers.jpg';
import Instructors from '../../components/Instructors/Instructors';


const Trainers = () => {
    return (
        <>
            <BreadCrumb title="Our Instructors" image={trainers}>
            GYMFUEL's goal is to help people understand there are simple ways to keep your body healthy, toned and active. We provide all the tools and support you need to achieve this.​
            </BreadCrumb>
            <Instructors></Instructors>
        </>
    );
};

export default Trainers;