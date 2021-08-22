import React, { Component } from "react";

export default class GeneralTab extends Component {
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
            {this.props.athletes.map((athlete, index) => (
              <tr key={index}>
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
