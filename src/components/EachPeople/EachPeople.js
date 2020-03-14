import React, { useState } from 'react';
import './EachPeople.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserCheck,faEnvelope,faMoneyBill} from '@fortawesome/free-solid-svg-icons'
const EachPeople = (props) => {

    const {name,email,img,salary}=props.people;
    const [isAdd,setAdd]= useState(false);
    let addButton=<button onClick={()=>{props.handleAddPeople(props.people); setAdd(true)}}><FontAwesomeIcon icon={faUserPlus} /> Add Me</button>
    if(isAdd){
        addButton=<button className="added" disabled><FontAwesomeIcon icon={faUserCheck} /> Added</button>
    }
    return (
        <div className="each-people">
            <div className="profile-img">
                <img src={img} alt=""/>
            </div>
            <div className="people-details">
                <h5>{name}</h5>
                <p><small><FontAwesomeIcon icon={faEnvelope} /> {email}</small></p>
                <p><FontAwesomeIcon icon={faMoneyBill} /> ${salary}</p>
                {addButton}
            </div>
                
        </div>
    );
};

export default EachPeople;