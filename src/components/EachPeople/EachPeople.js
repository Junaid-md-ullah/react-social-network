import React, { useState } from 'react';
import './EachPeople.css';

const EachPeople = (props) => {

    const {name,email,img,salary}=props.people;
    const [isAdd,setAdd]= useState(false);
    let addButton=<button onClick={()=>{props.handleAddPeople(props.people); setAdd(true)}}>Add Me</button>
    if(isAdd){
        addButton=<button className="added" disabled>Added</button>
    }
    return (
        <div className="each-people">
            <div className="profile-img">
                <img src={img} alt=""/>
            </div>
            <div className="people-details">
                <h5>{name}</h5>
                <p><small>Email: {email}</small></p>
                <p>${salary}</p>
                {addButton}
            </div>
                
        </div>
    );
};

export default EachPeople;