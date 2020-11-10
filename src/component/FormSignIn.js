import React, { Component } from "react";
import "./FormSignIn.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends Component {
  startLogin = (e) => {
    e.preventDefault();
    axios
      .get("https://travel-share-backend.herokuapp.com/api/user", {
        params: { email: `${document.getElementById("email").value}` },
      })
      .then((res) => {
        console.log(res.data.data[0]);
        if (
          res.data.data[0]?.password ===
          document.getElementById("password").value
        ) {
          // success
          this.props.signInSuccess(res.data.data[0]);
          this.redirectTo("/");
        } else {
          // wrong
          console.log("wrong");
          document.getElementById("password").classList.add("wrongPassWord");
        }
      })
      .catch((err) => console.log("err: " + err));
  };

  redirectTo = (path) => {
    this.props.history.push(path);
  };

  render() {
    return (
      <form className="form-sign-in" onSubmit={this.startLogin}>
        <h1>Đăng nhập</h1>
        <input
          placeholder="Email"
          className="inputEmail"
          id="email"
          type="email"
          required
        />
        <input placeholder="Mật khẩu" id="password" type="password" required />
        <button type="submit">Đăng nhập</button>
        <a href="#link">Quên mật khẩu?</a>
        <div className="create-acc">
          <div className="bottom">
            <p>Bạn chưa có tài khoản? </p>
            <a href="#link" onClick={() => this.redirectTo("/signup")}>
              Đăng ký
            </a>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);
