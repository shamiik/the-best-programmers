import React from 'react';
import './Person.css'

const Person = (props) => {
    const { name, img, developer, designation, salary, nationality, known } = props.person;

    return (
        <div>
            <div className='card-body card person '>
                <img src={img} className='person-img ' alt="..." />
                <div className='person-info'>
                    <h2>{name}</h2>
                    <p>Developed: {developer}</p>
                    <p>Designation: {designation}</p>
                    <p>Born in: {nationality}</p>
                    <p>Known for: <span className='fw-bold'>{known}</span> </p>
                    <p>Salary: ${salary}</p>
                </div>
                <button onClick={() => props.handleAddToCart(props.person)} className='btn btn-primary'>Add to Listed</button>
            </div>
        </div>

    );
};

export default Person;