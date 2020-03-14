import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    for(let i=0;i<cart.length;i++){
        const people=cart[i];
        total=total+people.salary;
    }
    let fund=0;
    let totalFund=0;
    for(let i=0;i<cart.length;i++){
        const people=cart[i];
        fund=people.salary*0.02;
        totalFund=totalFund+fund;
    }
    

    return (
        <div>
            <h3>Social Status</h3> 
            <h5>Total Neighbours: {props.cart.length}</h5>
            <h4>Neighbours Total Monthly Income:{total}</h4>
            <h3>Social Fund-Raised: {totalFund}</h3>
        </div>
    );
};

export default Cart;