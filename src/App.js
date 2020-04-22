import React, { useState } from 'react';
import './App.css';
import {generatePARENT} from './components/passwordgenerator'

function App() {

  const [conditionals, setConditionals] = useState({

    number: false,
    specialChar: false,
    letter: false,
    length:10
  })

  const [password,setPassword] = useState(`setting password`)

  return (
    <React.Fragment>
      Password Generator

      <React.Fragment>
        <br />
        <ul>
      Special Characters
      <li><input type="checkbox" onChange={(e) => setConditionals({ ...conditionals, specialChar: !conditionals.specialChar })} /></li>
      <br />
      Letters
      <li><input type="checkbox" onChange={(e) => setConditionals({ ...conditionals, letter: !conditionals.letter })} /></li>
      {/* <br /> */}
      Numbers
      <li><input type="checkbox" onChange={(e) => setConditionals({ ...conditionals, number: !conditionals.number })} />
        </li></ul>

        <button 
        onClick={()=>{

          // number: false,
          // specialChar: false,
          // letter: false,

        var choices = []
        choices = conditionals.number===true ? [...choices,`number`] : [...choices]
        choices = conditionals.specialChar===true ? [...choices,`specialChar`] : [...choices]
        choices = conditionals.letter===true ? [...choices,`letter`] : [...choices]

        if (choices.length<=1){
          alert(`please have at least two ticked items. thank you`)
          return;
        }

            setPassword(generatePARENT(conditionals.length,choices))
          
        }}>Generate Password</button>

        Your password is the following <br/>
        {password}

      </React.Fragment>



    </React.Fragment>
  );
}

export default App;
