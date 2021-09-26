import React from 'react';
import './Person.css'
const Person = (props) => {
    const { name, img, developer, designation, salary } = props.person;
    return (
        <div className='person'>
            <div className='card-body card'>
                <img src={img} className='person-img' alt="..." />
                <h2>{name}</h2>
                <p>Developed: {developer}</p>
                <p>Designation: {designation}</p>
                <p>Salary: {salary}</p>
            </div>
        </div>
    );
};

export default Person;