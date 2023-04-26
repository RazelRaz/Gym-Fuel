import React from 'react';
import { FaCrown, FaAngleRight } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import './Programs.css';
import {programs} from '../../data'
import Card from '../../UI/Card/Card';
import { Link } from 'react-router-dom';

const Programs = () => {
    return (
        <section className='programs_area programs'>
            <div className='container programs_container'>
                <SectionHeading icon={<FaCrown></FaCrown>} title="Programs"></SectionHeading>
                <div className='programs_wrapper'>
                    {
                        programs.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className='programs_program' key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className="btn sm">Let's Roll <FaAngleRight></FaAngleRight></Link>
                            </Card>
                        )
                        })
                    } 
                </div>
            </div>
            
        </section>
    );
};

export default Programs;