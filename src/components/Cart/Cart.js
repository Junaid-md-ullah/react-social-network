import React from 'react';
import './Cart.css';
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
        <div className="cart-details">
            <h3>Social Status</h3> 
            <h5>Total Neighbours: {props.cart.length}</h5>
            <h5>Neighbours Total Monthly Income: ${total}</h5>
            <h4>Social Fund-Raised: ${totalFund}</h4>
        {
            cart.map(user=>{
                return(
                    <div className="user-container">
                       <ul>
                       <li>{user.name} ({user.salary})</li>
                       </ul>
                        
                 </div>
                )
            })
        }
        </div>
    );
};

export default Cart;