import React, { Component } from "react";
import "./NotFound.css";
export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="c">
          <div className="_404">404</div>
          <hr />
          <div className="_1">THE PAGE</div>
          <div className="_2">WAS NOT FOUND</div>
          <a className="btn btn-outline-success" href="/">
            BACK TO HOMEPAGE
          </a>
        </div>
      </div>
    );
  }
}
