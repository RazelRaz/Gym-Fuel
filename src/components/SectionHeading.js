import React from 'react';

const SectionHeading = ({icon, title, className}) => {
    return (
        <div className={`section_head ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
    );
};

export default SectionHeading;