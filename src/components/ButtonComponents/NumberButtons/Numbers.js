import React, { useState }from "react";
import { numbers } from '../../../data.js'
import NumberButton from "./NumberButton"
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [stateNumbers, setNumber] = useState(numbers);
  const mapNums = stateNumbers.map(digits => digits)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {stateNumbers.map(data => (
         <NumberButton key={data} mapNums={data} />
       ))}
    </div>
  );
};

export default Numbers
