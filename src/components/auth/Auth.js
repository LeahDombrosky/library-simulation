import React, { Component } from "react";
import "./Auth.css";

class Auth extends Component {
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
      <div className="Auth-Container">
        <div className="GrayBox">
          {/* <div className="Image" /> */}
          <img src="../../assets/tan-logo.svg" alt="Tan logo" />
          <h1>Book Exchange</h1>
          <div className="BlackBox">
            <div id="Form">
              <form>
                <label>
                  Username:
                  <input type="text" name="username" />
                </label>
                <label>
                  Password:
                  <input type="text" name="password" />
                </label>
                {/* <input type="submit" value="Submit" /> */}
                <button onClick={this.handlelogin} className="login-button">
                  Register
                </button>
                <button onClick={this.handlelogin} className="login-button">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Auth;
