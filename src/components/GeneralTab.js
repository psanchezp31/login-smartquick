import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./Dashboard";


export default class GeneralTab extends Component {
  constructor(props) {
    super(props);

    this.state = { athletes: [] };
  }

  componentDidMount() {
    const url = `${API_URL}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ athletes: data });
        console.log(this.state.athletes);
      });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
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
          </thead>
          <tbody>
            {this.state.athletes.map((athlete) => (
              <tr>
                <td>{athlete.athlete}</td>
                <td>{athlete.age}</td>
                <td>{athlete.country}</td>
                <td>{athlete.year}</td>
                <td>{athlete.date}</td>
                <td>{athlete.sport}</td>
                <td>{athlete.gold}</td>
                <td>{athlete.silver}</td>
                <td>{athlete.bronze}</td>
                <td>{athlete.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
