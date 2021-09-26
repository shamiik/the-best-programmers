import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);

    //cart data added - reducer
    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.salary;
    const total = cart.reduce(totalReducer, 0)

    return (
        <div className='cart card-body card'>
            {/* cart data with fontawesome icon */}

            <h3> <i class="fas fa-users"></i> Listed Person: {cart.length}</h3>
            <h4>Total Salary: ${total}</h4>
            <p className='fw-bold'>Listed Person Name:</p>
            <ul>
                {
                    cart.map(person => <li key={person.id}>
                        {person.name}</li>)
                }
            </ul>

        </div>
    );
};

export default Cart;