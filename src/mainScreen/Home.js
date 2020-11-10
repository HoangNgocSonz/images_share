import React, { Component } from "react";
import axios from "axios";
import FormPostToHomePage from "../component/FormPostToHomePage";
import Navbar from "../component/Navbar";
import "./Home.css";
import PostList from "../component/PostList";
import Select from "../component/Select";
import FormSignIn from "../component/FormSignIn";
import FormSignUp from "../component/FormSignUp";
import PostDetail from "../component/PostDetail";
import UserDetail from "../component/UserDetail";
import NotFound from "../component/NotFound";
import Follow from "./Follow";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: !!localStorage.user,
      displayPostForm: false,
    };
  }
  showFormPostToHomePage = () => {
    this.setState((prev) => ({ ...prev, displayPostForm: true }));
  };
  hideFormPostToHomePage = () => {
    this.setState((prev) => ({ ...prev, displayPostForm: false }));
  };

  signInSuccess = (user) => {
    localStorage.user = JSON.stringify(user);
    this.setState((prev) => ({ ...prev, loggedIn: true }));
  };
  signout = () => {
    localStorage.removeItem("user");
    this.setState((prev) => ({ ...prev, loggedIn: false }));
  };
  render() {
    return (
      <Router>
        <Navbar
          signout={this.signout}
          loggedIn={this.state.loggedIn}
          showForm={this.showFormPostToHomePage}
        ></Navbar>
        {/* <UserDetail></UserDetail> */}
        {this.state.displayPostForm && (
          <div id="FormPostToHomePages">
            <FormPostToHomePage
              hideForm={this.hideFormPostToHomePage}
            ></FormPostToHomePage>
          </div>
        )}
        <Switch>
          <Route path="/" exact>
            <div className="postList">
              <PostList />
            </div>
          </Route>
          <Route path="/user" component={UserDetail} />
          <Route path="/follow" component={Follow} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/signin">
            <div className="FormLogin" id="FormLogin">
              <FormSignIn signInSuccess={this.signInSuccess}></FormSignIn>
            </div>
          </Route>
          <Route path="/signup">
            <FormSignUp />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
