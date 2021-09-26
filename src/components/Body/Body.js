import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Body.css';

const Body = () => {

    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);


    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
        // console.log(newCart);
    }

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
                        handleAddToCart={handleAddToCart}
                    ></Person>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;