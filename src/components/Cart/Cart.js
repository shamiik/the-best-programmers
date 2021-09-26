import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.salary;
    const total = cart.reduce(totalReducer, 0)

    return (
        <div>
            <h3>Listed Person: {cart.length}</h3>
            <h4>Total Salary: ${total}</h4>
            <ul>
                <br />
                {
                    cart.map(person => <li>{person.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;