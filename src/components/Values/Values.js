import React from 'react';
import './Values.css'
import gymHuman from '../../images/gymhuman.jpg' 
import SectionHeading from '../SectionHeading';
import { FaCrown } from 'react-icons/fa';
import { values } from '../../data';
import Card from '../../UI/Card/Card';


const Values = () => {
    return (
        <section className='values_area '>
            <div className='container values_container'>
                <div className='values_left'>
                    <div className='values_image'>
                        <img src={gymHuman} alt="Human" srcSet='' />
                    </div>
                </div>
                <div className='values_right'>
                    <SectionHeading icon={<FaCrown></FaCrown>} title='Values'></SectionHeading>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, soluta.</p>
                    <div className='values_wrapper'>
                        {
                            values.map(({id, icon, title, desc}) => {
                                return (
                                    <Card className='values_value' key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;