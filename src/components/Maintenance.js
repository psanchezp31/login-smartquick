import React, { Component } from "react";
import maintenance from "../assets/img/maintenance-image.png";

export default class Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Mantenimiento de la página web.",
      subtitle: " Lamentamos las molestias, volveremos pronto. ",
    };
  }

  render() {
    return (
      <div className="maintenance-container">
        <div class="maintenance-message">
          {this.state.title} <br></br>
          {this.state.subtitle}
        </div>
        <div class="maintenance-image">
          <img src={maintenance} alt="maintenance" />
        </div>
        <div class="button-container">
          <button id="login-button" type="submit">
            Regresa al inicio
          </button>
        </div>
      </div>
    );
  }
}
