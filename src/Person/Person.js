import React from 'react';
import './Person.css'

const person = (props) => {
    // can add code here
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name}. I am {props.age} years old. My Code: {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;