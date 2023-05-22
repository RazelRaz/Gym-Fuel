import React from 'react';
import './NotFound.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import contactUsImage from '../../images/contact.jpg';
import NothingFound from '../../components/NothingFound/NothingFound';

const NotFound = () => {
    return (
        <>
            <BreadCrumb title="Not Found" image={contactUsImage}>
                No Page Found
            </BreadCrumb>
            <NothingFound></NothingFound>
        </>
        
    );
};

export default NotFound;