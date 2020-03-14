import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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
            <h2>Donors List:</h2>
        {
            cart.map(user=>{
                return(
                    <div className="user-container">
                       <ul>
                       <li><small>{user.name} (${user.salary})<FontAwesomeIcon onClick={()=>props.handleAddPeople(user,'disconnect')}  icon={faTrash} /></small></li>
                      
                       </ul>
                       <hr/>
                 </div>
                 
                )
            })
        }
        </div>
    );
};

export default Cart;