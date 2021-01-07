import React from "react";

import "./total.css";

import AssessmentIcon from "@material-ui/icons/Assessment";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BallotIcon from '@material-ui/icons/Ballot';
//import total compoent

import Totalcomponent from "./Totalcomponent";

//import total compoent
function Total() {
  return (
    <div className="totalmain">
      <Totalcomponent name="Total Sales" value="200" Icon={AssessmentIcon} color="primary" />
      <Totalcomponent name="Total Cost" value="200" Icon={MonetizationOnIcon} color="secondary" />
      <Totalcomponent name="Products Sold" value="200" Icon={BallotIcon}  color="error"/>
    </div>
  );
}

export default Total;
