import React from 'react';

import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I am {props.name}, I am a {props.job} and I am {props.age} years old</p>
      <p>{props.children} </p>
      <input type="text" value={props.name} onChange={props.change}/>
    </div>
  )
}


export default person;
