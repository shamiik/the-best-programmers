import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Body.css';

const Body = () => {
    // person and cart data set 

    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);

    // button handler 

    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
        // console.log(newCart);
    }

    // Data load from JSON file 

    useEffect(() => {
        fetch('./realdb.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);

    return (
        <div className='body-container'>
            <div className='row row-cols-1 row-cols-md-3 g-4 col person-container'>
                {/* data sent by pros  */}
                {
                    persons.map(person => <Person
                        key={person.id}
                        person={person}
                        handleAddToCart={handleAddToCart}
                    ></Person>)
                }
            </div>
            {/* cart called  */}
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;