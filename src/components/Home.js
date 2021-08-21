import React, { Component } from "react";
import axios from "axios";
import Login from "./Login";
import "../style/index.css";
import HeaderBar from "./HeaderBar";
import Dashboard from "./Dashboard";
import Maintenance from "./Maintenance";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Dashboard />
      </div>
    );
  }
}
