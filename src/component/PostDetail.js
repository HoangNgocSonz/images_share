import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostDetail.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { BsHeartFill, BsChatFill, BsThreeDots } from "react-icons/bs";

// Example use:
// <PostDetail _id="5f8a93f9615ed90023d6bbbf" />

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    this.componentDidMount.bind(this);
    this.state = {
      author: {},
      isFollowed: false,
    };
    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    //
    axios
      .get(
        `https://travel-share-backend.herokuapp.com/api/post/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState((prev) => ({ ...prev, ...res.data.data }));
      })
      .then(() => {
        axios
          .get(
            `https://travel-share-backend.herokuapp.com/api/user/${this.state.author}`
          )
          .then((res) => {
            const { data } = res.data;
            console.log(data);
            this.setState((prev) => ({
              ...prev,
              author: { ...data },
              isFollowed: data?.followers?.includes(
                JSON.parse(localStorage?.user || "{}")?._id
              ),
            }));
          })
          .catch((err) => console.log("err: " + err));
      })
      .catch((err) => console.log("err: " + err));
  }

  redirectTo(id) {
    console.log(this.props.history);
    this.props.history.push(`/user/${id}`);
  }

  toggleFollow(isFollowed) {
    if (localStorage.user) {
      const curId = JSON.parse(localStorage.user)?._id;
      axios
        .post(
          `https://travel-share-backend.herokuapp.com/api/user/${curId}/follow`,
          { target: this.state.author?._id, unfollow: !isFollowed }
        )
        .then((res) => {
          this.setState((prev) => ({ ...prev, isFollowed }));
        })
        .catch((err) => console.log("err: " + err));
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div className="container  bg-midnight my-4" id="post">
        <div className="post-img">
          <img
            // src="https://i.pinimg.com/originals/46/dc/dd/46dcdd45408a7aa3b607a03d21db06a7.jpg"
            src={this.state?.images}
            alt="img"
          />
        </div>
        <div className="post-info px-4 pt-3">
          <div>
            <h1 className="font-weight-bold post-title">
              {this.state.title || "undefined"}
            </h1>
            <p className="post-desc">{this.state.description}</p>
          </div>

          <div className="post-author clearfix">
            <div className="float-left">
              <div
                className="author-avatar float-left cursor-pointer"
                onClick={() => this.redirectTo(this.state.author?._id)}
              >
                <img src={this.state.author?.avatar} />
              </div>
              <div className="float-left">
                <h6
                  className="author-name font-weight-bold cursor-pointer"
                  onClick={() => this.redirectTo(this.state.author?._id)}
                >
                  {this.state.author?.username}
                </h6>
                <span className="sub-text">
                  {this.state.author?.followers?.length} followers
                </span>
              </div>
            </div>
            <div className="float-right">
              {this.state.isFollowed ? (
                <button
                  className="btn btn-light follow"
                  onClick={() => this.toggleFollow(false)}
                >
                  Followed
                </button>
              ) : (
                <button
                  className="btn btn-outline-info follow"
                  onClick={() => this.toggleFollow(true)}
                >
                  Follow
                </button>
              )}
            </div>
          </div>

          <div className="comments">
            <h5 className="font-weight-bold mb-0">Comments</h5>
            <div className="comment-box">
              <ul className="commentList">
                <li className="comment-item">
                  <div className="comment-avatar">
                    <img src="http://placekitten.com/50/50" />
                  </div>
                  <div className="d-table-cell">
                    <div className="comment-detail">
                      <h6 className="comment-author">sesaltme</h6>
                      <p className="comment-text">
                        Hello this is a test comment.
                      </p>
                      <span className="comment-date sub-text">
                        on March 5th, 2014
                      </span>
                    </div>
                    <div className="pl-2 mt-1 icons">
                      <BsHeartFill className="bs-icon" />
                      <BsChatFill className="bs-icon" />
                      <BsThreeDots className="bs-icon" />
                    </div>
                  </div>
                  <div></div>
                </li>
                <li className="comment-item">
                  <div className="comment-avatar">
                    <img src="http://placekitten.com/40/40" />
                  </div>
                  <div className="d-table-cell">
                    <div className="comment-detail">
                      <h6 className="comment-author">username</h6>
                      <p className="comment-text">
                        Hello this is a test comment and this comment is
                        particularly very long and it goes on and on and on.
                      </p>
                      <span className="comment-date sub-text">
                        on March 5th, 2014
                      </span>
                    </div>
                    <div className="pl-2 mt-1 icons">
                      <BsHeartFill className="bs-icon" />
                      <BsChatFill className="bs-icon" />
                      <BsThreeDots className="bs-icon" />
                    </div>
                  </div>
                </li>
              </ul>
              {JSON.parse(localStorage?.user || "{}")?._id && (
                <form className="user-comment-item">
                  <div className="comment-avatar">
                    <img
                      src={JSON.parse(localStorage.user || "{}")?.avatar}
                      alt="avatar"
                    />
                  </div>
                  <input
                    className="comment-detail"
                    type="text"
                    name="comment"
                    placeholder="Your comments"
                  />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostDetail);
