import React from 'react';
import './PeopleList.css';
import {useState} from 'react';
import EachPeople from '../EachPeople/EachPeople';
import Cart from '../Cart/Cart'

const PeopleList = () => {

    const peoples=[
        {name:"Junaid Md. Ullah",email:"junaid00.ju@gmail.com",img:"https://randomuser.me/api/portraits/men/1.jpg",salary:3200},
        {name:"humaid Md. Ullah",email:"humaid@gmail.com",img:"https://randomuser.me/api/portraits/men/16.jpg",salary:2200},
        {name:"Jasper Singh",email:"mwswy@example.com",img:"https://randomuser.me/api/portraits/men/40.jpg",salary:3500},
        {name:"Chandler Bing",email:"chandler@yahoo.com",img:"https://randomuser.me/api/portraits/men/78.jpg",salary:3000},
        {name:"Joey Tribbiani",email:"joey@gmail.com",img:"https://randomuser.me/api/portraits/men/80.jpg",salary:6500},
        {name:"Ross Geller",email:"ross@gmail.com",img:"https://randomuser.me/api/portraits/men/99.jpg",salary:10000},
        {name:"Ganther Tom",email:"ganther@gmail.com",img:"https://randomuser.me/api/portraits/men/4.jpg",salary:2000},
        {name:"Matt Leblanc",email:"matty@rocketmail.com",img:"https://randomuser.me/api/portraits/women/44.jpg",salary:4400},
        {name:"Mathew Perry",email:"mathew@gmail.com",img:"https://randomuser.me/api/portraits/women/42.jpg",salary:1200},
        {name:"Mathew Perry",email:"mathew@gmail.com",img:"https://randomuser.me/api/portraits/women/42.jpg",salary:1200},
        {name:"Mathew Perry",email:"mathew@gmail.com",img:"https://randomuser.me/api/portraits/women/42.jpg",salary:1200},
        {name:"Mathew Perry",email:"mathew@gmail.com",img:"https://randomuser.me/api/portraits/women/42.jpg",salary:1200},
        {name:"Mathew Perry",email:"mathew@gmail.com",img:"https://randomuser.me/api/portraits/women/42.jpg",salary:1200},
        {name:"Mathew Perry",email:"mathew@gmail.com",img:"https://randomuser.me/api/portraits/women/42.jpg",salary:1200},
        {name:"Mathew Perry",email:"mathew@gmail.com",img:"https://randomuser.me/api/portraits/women/42.jpg",salary:1200},
        {name:"Mathew Perry",email:"mathew@gmail.com",img:"https://randomuser.me/api/portraits/women/42.jpg",salary:1200},
        {name:"Mathew Perry",email:"mathew@gmail.com",img:"https://randomuser.me/api/portraits/women/42.jpg",salary:1200}
        


    ]
    
    // fetch('https://randomuser.me/api/?results=15')
    // .then(response=>response.json())
    // .then(data=>console.log(data))
    // const [peoples,setPeople]=useState();
    // const first10=peoples.slice(0,10);
    // const [people,setPeople]=useState([first10]);
    const [cart,setCart]=useState([]);
    const handleAddPeople=(people)=>{
        const newCart=[...cart,people];
        setCart(newCart);
    }
    return (
        <div className="people-container">
            <div className="people">
            {
                    peoples.map(people=><EachPeople people={people} handleAddPeople={handleAddPeople}></EachPeople>)
            }
            </div>
                

            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default PeopleList;