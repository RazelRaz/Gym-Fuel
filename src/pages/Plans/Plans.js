import React from 'react';
import './Plans.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import plansImage from '../../images/plans.jpg';
import MembershipPlans from '../../components/MembershipPlans/MembershipPlans';

const Plans = () => {
    return (
        <>
            <BreadCrumb title="Membership Plans" image={plansImage}>
            At GYMFUEL we believe Crossfitters come in all shapes and sizes, we are all on a journey towards our own personal best health and fitness levels.
            </BreadCrumb>
            <MembershipPlans></MembershipPlans>
        </>
    );
};

export default Plans;