import React, { Component } from "react";

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Henry",
      type: "Administrador",
    };
  }
  render() {
    return (
      <div className="header-info-bar-container">
        <ul id="header-bar-items">
          <li className="user">{this.state.name}</li>
          <li className="user">{this.state.type}</li>
          <li className="user" id="icon">
            <i class="fas fa-users-cog"></i>
          </li>
        </ul>
      </div>
    );
  }
}
