import React, { Component } from "react";
import "./FormSignUp.css";
import { withRouter } from "react-router-dom";

class Login extends Component {
  redirectToSignIn = () => {
    this.props.history.push("/signin");
  };
  render() {
    return (
      <form className="form-sign-up">
        <h1>Đăng ký</h1>
        <input placeholder="Tên đăng nhập" type="text" required="" />
        <input placeholder="Email" type="email" required="" />
        <input id="pass" placeholder="Mật khẩu" type="password" />
        <input id="cf-pass" placeholder="Xác nhận mật khẩu" type="password" />
        <button>Đăng ký</button>
        <div className="go-sign-in">
          <div className="bottom">
            <p>Bạn đã có tài khoản? </p>
            <a href="#link" onClick={this.redirectToSignIn}>
              Đăng nhập
            </a>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);
