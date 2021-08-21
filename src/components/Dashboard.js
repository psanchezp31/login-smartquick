import React, { Component } from "react";
import HeaderBar from "./HeaderBar";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      atleta: "Michael Phelps",
      edad: "23",
      pais: "United States",
      año: "2008",
      fecha: "24/08/2008",
      deporte: "Swimming",
      oro: "8",
      plata: "0",
      bronce: "0",
      total: "8",
    };
  }

  render() {
    return (
      <div>
        <HeaderBar/>
        <div className="dashboard-container">
          <h1>Tablero general</h1>
          <table class="table">
            <tr>
              <th>Atleta</th>
              <th>Edad</th>
              <th>País</th>
              <th>Año</th>
              <th>Fecha</th>
              <th>Deporte</th>
              <th>Oro</th>
              <th>Plata</th>
              <th>Bronce</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>{this.state.atleta}</td>
              <td>{this.state.edad}</td>
              <td>{this.state.pais}</td>
              <td>{this.state.año}</td>
              <td>{this.state.fecha}</td>
              <td>{this.state.deporte}</td>
              <td>{this.state.oro}</td>
              <td>{this.state.plata}</td>
              <td>{this.state.bronce}</td>
              <td>{this.state.total}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
