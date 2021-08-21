import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./Dashboard";

export default class GeneralTab extends Component {
  constructor(props) {
    super(props);

    this.state = { total_category: [] };
  }

  componentDidMount() {
    const url = `${API_URL}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ total_category: data });
        console.log(this.state.total_category);
      });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre categoría</th>
              <th>Total por categoría</th>
            </tr>
          </thead>
          <tbody id="tbody-categoriesTab">
            <tr>
              <td>🥇 Oro</td>
              <td>puntaje</td>
            </tr>
            <tr>
              <td>🥈 Plata</td>
              <td>puntaje</td>
            </tr>
            <tr>
              <td>🥉 Bronce</td>
              <td>puntaje</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
