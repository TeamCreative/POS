import React from "react";

import "./totalcomponent.css";
function Totalcomponent({ name, value, Icon,color }) {
  return (
    <div className="maindiv">
      <Icon color={color} fontSize="large" />
      <div className="values">
        <h4>${value}</h4>
        <h4>{name}</h4>
      </div>
    </div>
  );
}

export default Totalcomponent;
