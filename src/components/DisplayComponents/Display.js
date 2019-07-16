import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Specials from "../ButtonComponents/SpecialButtons/Specials";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import { numbers } from "../../data";

const Display = () => {
  return <div>{numbers}</div>;
};

export default Display;