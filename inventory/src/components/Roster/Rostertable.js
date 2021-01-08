import Box from "@material-ui/core/Box";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import moment from "moment";
import axios from "axios";
import Button from '@material-ui/core/Button';
//setdata
import "./rostertable.css";

//setdate
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props) {
  const { row, Time } = props;
  const classes = useRowStyles();

  const [mon, setMon] = useState(row.monday);
  const [tues, setTue] = useState(row.tuesday);
  const [weds, setWed] = useState(row.wednesday);
  const [thus, setThu] = useState(row.thrusday);
  const [fris, setFri] = useState(row.friday);
  const [sats, setSat] = useState(row.saturday);
  const [suns, setSun] = useState(row.sunday);
  const [totalhours, setTotalHours] = useState(row.totalhours);

  //total hours varibales for each day

  const monhours =
    moment(mon.split("-")[1], "HH:mm:ss a").diff(
      moment(mon.split("-")[0], "HH:mm:ss a"),
      "hours"
    ) +
    ":" +
    (parseInt(
      moment(mon.split("-")[1], "HH:mm:ss a").diff(
        moment(mon.split("-")[0], "HH:mm:ss a"),
        "minutes"
      )
    ) -
      parseInt(
        moment(mon.split("-")[1], "HH:mm:ss a").diff(
          moment(mon.split("-")[0], "HH:mm:ss a"),
          "hours"
        )
      ) *
        60);

  const tueshours =
    moment(tues.split("-")[1], "HH:mm:ss a").diff(
      moment(tues.split("-")[0], "HH:mm:ss a"),
      "hours"
    ) +
    ":" +
    (parseInt(
      moment(tues.split("-")[1], "HH:mm:ss a").diff(
        moment(tues.split("-")[0], "HH:mm:ss a"),
        "minutes"
      )
    ) -
      parseInt(
        moment(tues.split("-")[1], "HH:mm:ss a").diff(
          moment(tues.split("-")[0], "HH:mm:ss a"),
          "hours"
        )
      ) *
        60);

  const wedhours =
    moment(weds.split("-")[1], "HH:mm:ss a").diff(
      moment(weds.split("-")[0], "HH:mm:ss a"),
      "hours"
    ) +
    ":" +
    (parseInt(
      moment(weds.split("-")[1], "HH:mm:ss a").diff(
        moment(weds.split("-")[0], "HH:mm:ss a"),
        "minutes"
      )
    ) -
      parseInt(
        moment(weds.split("-")[1], "HH:mm:ss a").diff(
          moment(weds.split("-")[0], "HH:mm:ss a"),
          "hours"
        )
      ) *
        60);

  const thushours =
    moment(thus.split("-")[1], "HH:mm:ss a").diff(
      moment(thus.split("-")[0], "HH:mm:ss a"),
      "hours"
    ) +
    ":" +
    (parseInt(
      moment(thus.split("-")[1], "HH:mm:ss a").diff(
        moment(thus.split("-")[0], "HH:mm:ss a"),
        "minutes"
      )
    ) -
      parseInt(
        moment(thus.split("-")[1], "HH:mm:ss a").diff(
          moment(thus.split("-")[0], "HH:mm:ss a"),
          "hours"
        )
      ) *
        60);

  const frishours =
    moment(fris.split("-")[1], "HH:mm:ss a").diff(
      moment(fris.split("-")[0], "HH:mm:ss a"),
      "hours"
    ) +
    ":" +
    (parseInt(
      moment(fris.split("-")[1], "HH:mm:ss a").diff(
        moment(fris.split("-")[0], "HH:mm:ss a"),
        "minutes"
      )
    ) -
      parseInt(
        moment(fris.split("-")[1], "HH:mm:ss a").diff(
          moment(fris.split("-")[0], "HH:mm:ss a"),
          "hours"
        )
      ) *
        60);

  const sathours =
    moment(sats.split("-")[1], "HH:mm:ss a").diff(
      moment(sats.split("-")[0], "HH:mm:ss a"),
      "hours"
    ) +
    ":" +
    (parseInt(
      moment(sats.split("-")[1], "HH:mm:ss a").diff(
        moment(sats.split("-")[0], "HH:mm:ss a"),
        "minutes"
      )
    ) -
      parseInt(
        moment(sats.split("-")[1], "HH:mm:ss a").diff(
          moment(sats.split("-")[0], "HH:mm:ss a"),
          "hours"
        )
      ) *
        60);

  const sunhours =
    moment(suns.split("-")[1], "HH:mm:ss a").diff(
      moment(suns.split("-")[0], "HH:mm:ss a"),
      "hours"
    ) +
    ":" +
    (parseInt(
      moment(suns.split("-")[1], "HH:mm:ss a").diff(
        moment(suns.split("-")[0], "HH:mm:ss a"),
        "minutes"
      )
    ) -
      parseInt(
        moment(suns.split("-")[1], "HH:mm:ss a").diff(
          moment(suns.split("-")[0], "HH:mm:ss a"),
          "hours"
        )
      ) *
        60);

  //total hours varibales for each day

  //calulating total hours

  const any = [
    monhours,
    tueshours,
    wedhours,
    thushours,
    frishours,
    sathours,
    sunhours,
  ];

  const sum = any.reduce(
    (acc, time) => acc.add(moment.duration(time)),
    moment.duration()
  );

  //calulating total hours

  //submit
  //submitiion after
  const onSubmit = async () => {
    setTotalHours([Math.floor(sum.asHours()), sum.minutes()].join(":"));
    const exercise = {
      username: row.username,
      description: row.description,
      monday: mon,
      tuesday: tues,
      wednesday: weds,
      thrusday: thus,
      friday: fris,
      saturday: sats,
      sunday: suns,
      totalhours: totalhours,
      style: true,
    };

    console.log(exercise);

    await axios
      .post("http://localhost:5000/excercises/update/" + row._id, exercise)
      .then((res) => alert(res.data));


  const data2 = {
    username: row.username,
    description: row.description,
    monday: mon,
    tuesday: tues,
    wednesday: weds,
    thrusday: thus,
    friday: fris,
    saturday: sats,
    sunday: suns,
    totalhours: totalhours,
    style: true,
  }


   await axios.post("http://localhost:5000/excercises/access", data2)
   .then((res) => alert(res.data.status))


  };

  //submit

  useEffect(() => {
    setTotalHours([Math.floor(sum.asHours()), sum.minutes()].join(":"));
    console.log("total hours changed");
  }, [[Math.floor(sum.asHours()), sum.minutes()].join(":")]);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th" className="cellsName" scope="row">
          <h3 className="Name">{row.description}</h3>
          <h3 className="positionName">{row.username}</h3>
        </TableCell>
        <TableCell
          align="center"
          className={` ${monhours == "NaN:NaN" ? "deadcells" : "cells"}`}
        >
          <input
            type="string"
            value={mon}
            onChange={(e) => setMon(e.target.value)}
          />{" "}
          <h4>{monhours == "NaN:NaN" ? " time Off" : monhours}</h4>
        </TableCell>
        <TableCell
          align="center"
          className={` ${tueshours == "NaN:NaN" ? "deadcells" : "cells"}`}
        >
          <input
            type="string"
            value={tues}
            onChange={(e) => setTue(e.target.value)}
          />
          <h4>{tueshours == "NaN:NaN" ? " time Off" : tueshours}</h4>
        </TableCell>
        <TableCell
          align="center"
          className={` ${wedhours == "NaN:NaN" ? "deadcells" : "cells"}`}
        >
          <input
            type="string"
            value={weds}
            onChange={(e) => setWed(e.target.value)}
          />
          <h4>{wedhours == "NaN:NaN" ? " time Off" : wedhours}</h4>
        </TableCell>
        <TableCell
          align="center"
          className={` ${thushours == "NaN:NaN" ? "deadcells" : "cells"}`}
        >
          <input
            type="string"
            value={thus}
            onChange={(e) => setThu(e.target.value)}
          />
          <h4>{thushours == "NaN:NaN" ? " time Off" : thushours}</h4>
        </TableCell>
        <TableCell
          align="center"
          className={` ${frishours == "NaN:NaN" ? "deadcells" : "cells"}`}
        >
          <input
            type="string"
            value={fris}
            onChange={(e) => setFri(e.target.value)}
          />
          <h4>{frishours == "NaN:NaN" ? " time Off" : frishours}</h4>
        </TableCell>
        <TableCell
          align="center"
          className={` ${sathours == "NaN:NaN" ? "deadcells" : "cells"}`}
        >
          <input
            type="string"
            value={sats}
            onChange={(e) => setSat(e.target.value)}
          />
          <h4>{sathours == "NaN:NaN" ? " time Off" : sathours}</h4>
        </TableCell>
        <TableCell
          align="center"
          className={` ${sunhours == "NaN:NaN" ? "deadcells" : "cells"}`}
        >
          <input
            type="string"
            value={suns}
            onChange={(e) => setSun(e.target.value)}
          />
          <h4>{sunhours == "NaN:NaN" ? " time Off" : sunhours}</h4>
        </TableCell>
        <TableCell align="center" className="cells" style ={{minWidth:"100px"}}>
          {[Math.floor(sum.asHours()), sum.minutes()].join(":")}
        </TableCell>
        <TableCell align="center" className="cells" style={{borderRight:"none"}}>
          <Button variant="outlined"  color="primary" onClick={() => onSubmit()}>Update</Button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Rostertable(columndata, datas) {
  const [intialdata, setIntialData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/excercises/")
      .then((response) => setIntialData(response.data))
      .catch((error) => {
        return console.log(error);
      });
  }, []);

  //findong the week number
  const data = columndata.columndata;
  //findong the week number
  // total hours for the week

  console.log(data);

  const tt = intialdata.map((e) => e.totalhours);
  const sum = tt.reduce(
    (acc, time) => acc.add(moment.duration(time)),
    moment.duration()
  );
  const totalHoursfortheWeek = [Math.floor(sum.asHours()), sum.minutes()].join(
    ":"
  );

  // total hours for the week
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small" className="table">
        <TableHead>
          <TableRow className="Headers">
            <TableCell> Employee </TableCell>
            {data.map((e) => (
              <TableCell align="center" className="HeadingCell">
                <h4 style={{ padding: "0px" }}>{e.split("-")[0]}</h4>
                <h4 style={{ padding: "0px" }}>{e.split("-")[1]}</h4>
              </TableCell>
            ))}
            <TableCell align="center" className="HeadingCell"> Total Hours</TableCell>
            <TableCell align="center" className="HeadingCell"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {intialdata.map((row) => (
            <Row key={row._id} row={row} />
          ))}
          <TableRow className="totalHours">
            <TableCell component="th" scope="row">
              {" "}
            </TableCell>
            <TableCell component="th" scope="row">
              {" "}
            </TableCell>
            <TableCell component="th" scope="row">
              {" "}
            </TableCell>
            <TableCell component="th" scope="row">
              {" "}
            </TableCell>
            <TableCell component="th" scope="row">
              {" "}
            </TableCell>
            <TableCell component="th" scope="row">
              {" "}
            </TableCell>
            <TableCell component="th" scope="row">
              {" "}
            </TableCell>
            <TableCell component="th" className="cells" scope="row" >
              {" "}
             <h4>Total Hours for the Week</h4> 
            </TableCell>
            <TableCell component="th" scope="row" className="cells"  >
              <h2>{totalHoursfortheWeek}</h2>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
