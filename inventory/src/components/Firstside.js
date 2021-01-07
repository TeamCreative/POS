import React from "react";
import "./firstside.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import material

import RestaurantIcon from "@material-ui/icons/Restaurant";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
//import compoents
import Sidebarcomponent from "./Sidebarcomponent";

function Firstside() {
  return (
    <div className="sidebar">
      <Link
        style={{
          color: "gold",
          textDecoration: "none",
          textShadow: "10px 10px #ff0000",
        }}
        style={{ color: "gold", textDecoration: "none" }}
        to={"/"}
      >
        {" "}
        <Sidebarcomponent
          active
          Icon={RestaurantIcon}
          text="Queen of Jackson"
        />
      </Link>
      {/* <TwitterIcon className="styletwitterIcon" /> */}
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to={"/dashboard"}
      >
        {" "}
        <Sidebarcomponent active Icon={AppsIcon} text="Dashboard" />
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to={"/roster"}>
        {" "}
        <Sidebarcomponent text="Sales" Icon={MonetizationOnIcon} />
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to={"/roster"}>
        {" "}
        <Sidebarcomponent text="Supplier" Icon={NotificationImportantIcon} />
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to={"/roster"}>
        <Sidebarcomponent Icon={MessageIcon} text="Purchase" />
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to={"/roster"}>
        <Sidebarcomponent text="Reports" Icon={BookmarkIcon} />
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to={"/roster"}>
        <Sidebarcomponent text="Settings" Icon={MoreHorizIcon} />{" "}
      </Link>
    </div>
  );
}

export default Firstside;
