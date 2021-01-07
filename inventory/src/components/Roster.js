import React from "react";
import "./roster.css";
import Moment from "react-moment";
import moment from "moment";
//dashcompoenents
import Dashnav from "./dashborardcomponents/Dashnav";
import Mainname from "./dashborardcomponents/Mainname";
import Total from "./dashborardcomponents/Total";
import Charts from "./dashborardcomponents/Charts";
import Tables from "./dashborardcomponents/Tables";

import Rostertable from "./Roster/Rostertable";

const employee = [
  { name: "gurpreet" },
  { name: "gurpreet" },
  { name: "gurpreet" },
  { name: "gurpreet" },
];

//FINDING THE MONDAY AND SUNDAY OF THE WEEK

var now = moment();
var monday = now.clone().weekday(1);
var SUNDAY = now.clone().weekday(7);
var isNowWeekday = now.isBetween(monday, SUNDAY, null, "[]");

//FINDING THE MONDAY AND SUNDAY OF THE WEEK

//dashcomponents
function Roster() {
  let listOfDays = [];
  for (let dayDifference = 0; dayDifference <= 6; dayDifference++) {
    //make sure we take a copy of the current day, or .add() will change it
    const newDay = moment(monday).add(dayDifference, "days");
    listOfDays.push(newDay.format("DD/MM/YYYY") + "-" + newDay.format("dddd"));
  }

  //GET THE WEEK NUMBER
  Date.prototype.getWeek = function () {
    var target = new Date(this.valueOf());
    var dayNr = (this.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var firstThursday = target.valueOf();
    target.setMonth(0, 1);
    if (target.getDay() != 4) {
      target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
    }
    return 1 + Math.ceil((firstThursday - target) / 604800000);
  };

  var d = new Date();
  //GET THE WEEK NUMBER

  return (
    <div className="rostermain">
      <div className="Heading">
        <h2> Roster for week {d.getWeek()}</h2>{" "}
        {/* <h3>
          {listOfDays[0].split("-")[0]} -{" "}
          {listOfDays[listOfDays.length - 1].split("-")[0]}
        </h3>{" "} */}
      </div>
      <Rostertable columndata={listOfDays} datas={employee} />
    </div>
  );
}

export default Roster;
