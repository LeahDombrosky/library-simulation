import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handlelogin = this.handlelogin.bind(this);
    this.handlelogout = this.handlelogout.bind(this);
  }

  handlelogin() {
    window.location.href = "/login";
    //confirm this links to correct auth0 location
  }
  handlelogout() {
    window.location.href = "/logout";
  }

  render() {
    return (
      <div>
        {/* {!this.props.user_id ? (
          <div className="loginbuttons">
            <button onClick={this.handlelogin} className="login-button">
              LOGIN
            </button>
            <button onClick={this.handleLogin} className="register-button">
              REGISTER
            </button>
          </div>
        ) : (
          <button onClick={this.handlelogout} className="logouut-button">
            LOGOUT
          </button>
        )} */}

        <div className="GrayBox">
          <h1>Book Exchange</h1>
          <div className="BlackBox" />
        </div>
      </div>
    );
  }
}
export default Login;
