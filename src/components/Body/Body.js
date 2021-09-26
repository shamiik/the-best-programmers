import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Body.css';
const Body = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('./realdb.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);
    return (
        <div className='body-container'>
            <div className='row row-cols-1 row-cols-md-3 g-4 col person-container'>
                {
                    persons.map(person => <Person
                        key={person.id}
                        person={person}
                    ></Person>)
                }
            </div>
            <div>
                <h2>Person Numbered</h2>
            </div>
        </div>
    );
};

export default Body;