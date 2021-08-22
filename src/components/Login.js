import React, { Component } from "react";
import companyLogo from "../assets/img/logo.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  setEmail(email) {
    this.setState({
      email: email
    });
  }

  setPassword(password) {
    this.setState({
      password: password
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleLogin(this.state.email,this.state.password);
  }

  render() {
    return (
      <div className="login-container">
        <div className="logo">
          <img src={companyLogo} alt="logo" />
        </div>
        <div>
          <span>{this.props.loginError}</span>
        </div>
        <div className="login-form">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={event => this.setEmail(event.target.value)}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={event => this.setPassword(event.target.value)}
              required
            />

            <button id="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
