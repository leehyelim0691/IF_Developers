import React, { Component } from 'react';
import  { useState, useRef, useCallback, setValue } from 'react';


function Practice1(){
const [age, setAge] = useState(0);

//   constructor(props) {
//     super(props);
//     this.state = {
//       age: 0,
//     };
//   }
  
  // this.checkAge is passed as the callback to setState
  const updateAge = (value) => {
    setAge({value}, checkAge);
  };

  const checkAge = () => {
    const { age } = this.state;
    if (age !== 0 && age >= 21) {
      // Make API call to /beer
    } else {
      // Throw error 404, beer not found
    }
  };

 
    return (
      <div>
        <p>Drinking Age Checker</p>
        <input
          type="number"
          value={age}
          onChange={e => updateAge(e.target.value)}
        />
      </div>
    );

}

export default Practice1;
