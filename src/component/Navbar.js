import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiSearch } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { withRouter, Link } from "react-router-dom";

class NavBar extends Component {
  setBackground = () => {
    console.log("hoo");
    document.getElementById("inputSearch").classList.add("inputSearchFocus");
  };
  removeBackground = () => {
    document.getElementById("inputSearch").classList.remove("inputSearchFocus");
  };

  redirectTo = (path) => {
    this.props.history.push(path);
  };
  render() {
    return (
      <Navbar className="navbar" bg="light" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <img
            className="logoTeam"
            src={require("../access/logoteam2.png")}
          ></img>
          <Nav className="mr-auto">
            <div
              id="homeFocus"
              className={
                this.props.location.pathname === "/" ? "backgroundTrangchu" : ""
              }
            >
              <Nav.Link id="trangchu" href="/">
                Trang chủ
              </Nav.Link>
            </div>

            {this.props.loggedIn && (
              <div
                id="followFocus"
                className={
                  this.props.location.pathname === "/following"
                    ? "backgroundTrangchu"
                    : ""
                }
              >
                <div
                  id="homeFocus"
                  className={
                    this.props.location.pathname === "/follow"
                      ? "backgroundFollow"
                      : ""
                  }
                >
                  <Nav.Link href="#link" id="follow">
                    <Link
                      to={{
                        pathname: "/follow",
                      }}
                    >
                      Theo dõi
                    </Link>
                  </Nav.Link>
                </div>
              </div>
            )}

            {this.props.loggedIn ? (
              <Nav.Link
                href="#link"
                id="loginOnNavbar"
                onClick={this.props.signout}
              >
                Đăng xuất
              </Nav.Link>
            ) : (
              <Nav.Link
                href="#link"
                id="loginOnNavbar"
                onClick={() => this.redirectTo("/signin")}
              >
                Đăng nhập
              </Nav.Link>
            )}

            {this.props.loggedIn && (
              <div
                className={
                  this.props.location.pathname === "/user"
                    ? "backgroundCanhan"
                    : ""
                }
              >
                <Nav.Link href="#link">
                  <Link
                    to={{
                      pathname: "/user",
                    }}
                  >
                    Cá nhân
                  </Link>
                </Nav.Link>
              </div>
            )}
            {this.props.loggedIn && (
              <img
                className="plus"
                id="plus"
                src={require("../access/plus.png")}
                onClick={this.props.showForm}
                alt="img"
              ></img>
            )}
          </Nav>
          <Form inline className="search">
            <div className="inputSearch" id="inputSearch">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onFocus={this.setBackground}
                onBlur={this.removeBackground}
              />
              <FiSearch onClick={this.log} />
            </div>
          </Form>
          <div className="FaBells">
            <FaBell></FaBell>
          </div>
          <div className="AiFillSettings">
            <AiFillSetting></AiFillSetting>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(NavBar);
