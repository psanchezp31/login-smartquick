import React, { Component } from "react";
import companyLogo from "../assets/img/logo.png";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    

    /*.catch((error) => {
        console.log("login error", error);
      });*/
    event.preventDefault();
  }



  render() {
    return (
      <div className="login-container">
        <div className="logo">
          <img src={companyLogo} alt="logo" />
        </div>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.handleChange}
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
