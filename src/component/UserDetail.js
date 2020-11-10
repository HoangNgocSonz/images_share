import React, { Component } from "react";
import axios from "axios";
import "./UserDetail.css";
import PostList from "./PostList";

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    console.log(this.props);
    axios
      .get(
        `https://travel-share-backend.herokuapp.com/api/user/${this.props.match.params.id}/posts`
      )
      .then((res) => {
        this.setState((prev) => ({
          ...prev,
          user: res.data.data,
        }));
      })
      .catch((err) => console.log("err:" + err));
  }
  render() {
    return (
      <div className="my-5">
        <div className="panel profile-cover">
          <div className="profile-cover__img">
            <img
              className="avatar"
              src={this.state.user.avatar || require("../access/dora.png")}
              alt=""
            />
            <h3 className="h3">{this.state.user.username}</h3>
          </div>
          <div className="profile-cover__action bg--img" data-overlay="0.4">
            <button className="btn btn-rounded btn-info">
              <i className="fa fa-plus"></i>
              <span>Follow</span>
            </button>
            <button className="btn btn-rounded btn-info">
              <i className="fa fa-comment"></i>
              <span>Message</span>
            </button>
          </div>
          <div className="profile-cover__info">
            <ul className="nav">
              <li>
                <strong>{this.state.user.posts?.length}</strong>Posts
              </li>
              <li>
                <strong>{this.state.user.followers?.length}</strong>Followers
              </li>
              <li>
                <strong>{this.state.user.follows?.length}</strong>Following
              </li>
            </ul>
          </div>
        </div>
        {/* <PostList authors={[this.props.match.params.id]} /> */}
        <PostList></PostList>
      </div>
    );
  }
}
