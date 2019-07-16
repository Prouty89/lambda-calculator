import React from "react";

const NumberButton = props => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button className ="numBtn">{props.mapNums}</button>
    </div>
  );
};

export default NumberButton
