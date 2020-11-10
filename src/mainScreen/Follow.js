import React, { Component } from "react";
import "./Follow.css";
import PostList from "../component/PostList";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="follow">
        <img className="fakeFollow" src={require("../access/follow.png")}></img>
        <PostList></PostList>
      </div>
    );
  }
}
