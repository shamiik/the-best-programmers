import React from 'react';
import './Person.css'

const Person = (props) => {

    // destructuring data
    const { name, img, developer, designation, salary, nationality, known } = props.person;

    return (
        <div>
            <div className='card-body card person '>
                <img src={img} className='person-img img-fluid' alt="..." />
                <div className='person-info'>
                    <h3>{name}</h3>

                    {/* Normal UI style, Please skip it */}

                    {/* 
                    <p>Developed: {developer}</p>
                    <p>Designation: {designation}</p>
                    <p>Born in: {nationality}</p>
                    <p>Known for: <span className='fw-bold'>{known}</span> </p>
                    <p>Salary: ${salary}</p> 
                    */}


                    {/* by listing Data loaded - UI*/}
                    <ul>
                        <li>Developed: {developer}</li>
                        <li>Designation: {designation}</li>
                        <li>Born in: {nationality}</li>
                        <li>Known for: <span className='fw-bold'>{known}</span> </li>
                        <li>Salary: ${salary}</li>
                    </ul>
                </div>

                {/* button handler onClick */}

                <button onClick={() => props.handleAddToCart(props.person)} className='btn btn-primary'>  <i class="fas fa-user"></i>  Add to Listed</button>
            </div>
        </div>

    );
};

export default Person;