import React from 'react';

const Cart = (props) => {
    console.log(props.people)
    return (
        <div>
            <h3>Social Status</h3> 
            <h5>Total Neighbours: {props.cart.length}</h5>
            <h4>Neighbours Total Monthly Income:{0}</h4>
            <h3>Social Fund Raised: {0}</h3>
        </div>
    );
};

export default Cart;