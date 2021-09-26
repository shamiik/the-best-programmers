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
                <p>Salary: ${salary}</p>
                <button>Add to Listed</button>
                {/* <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'> {cartIcon} Add to Cart</button> */}
            </div>
        </div>
    );
};

export default Person;