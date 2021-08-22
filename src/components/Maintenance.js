import React, { Component } from "react";
import maintenance from "../assets/img/maintenance-image.png";

export default class Maintenance extends Component {
  render() {
    return (
      <div className="maintenance-container">
        <div className="maintenance-message">
          Mantenimiento de la página web. <br></br>
          Lamentamos las molestias, volveremos pronto.
        </div>
        <div className="maintenance-image">
          <img src={maintenance} alt="maintenance" />
        </div>
        <div className="button-container">
          <button className="logout-button" onClick={this.props.handleLogout}>
            Regresa al inicio
          </button>
        </div>
      </div>
    );
  }
}
