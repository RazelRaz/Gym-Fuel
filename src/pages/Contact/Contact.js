import React from 'react';
import './Contact.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import contactUsImage from '../../images/contact.jpg';
import ContactUs from '../../components/ContactUs/ContactUs';

const Contact = () => {
    return (
        <>
            <BreadCrumb title="Contact Us" image={contactUsImage}>
            Speak with a Life Fitness consultant to learn which products are right for your facility.
            </BreadCrumb>
            <ContactUs></ContactUs>
        </>
    );
};

export default Contact;