import React, { Component } from "react";
import axios from "axios";
import "./PostList.css";
import StackGrid from "react-stack-grid";
import { withRouter } from "react-router-dom";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      widthImg: 248,
    };
    this.redirectTo = this.redirectTo.bind(this);
  }
  componentDidMount() {
    console.log("user: " + localStorage.user);
    console.log("path:" + this.props.location.pathname);
    if (window.innerWidth < 900 && window.innerWidth > 372) {
      this.setState({
        widthImg: 176,
      });
    }
    if (window.innerWidth <= 372) {
      this.setState({
        widthImg: 160,
      });
    }
    if (window.innerWidth < 340) {
      this.setState({
        widthImg: 140,
      });
    }
    if (window.innerWidth < 300) {
      this.setState({
        widthImg: 120,
      });
    }
    axios
      .get(`https://travel-share-backend.herokuapp.com/api/post`)
      .then((res) => {
        this.setState((prev) => ({
          ...prev,
          posts: res.data.data?.posts || res.data.data,
          postList: res.data.data,
        }));
      })
      // }));
      .catch((err) => console.log("err:" + err));
  }

  redirectTo(id) {
    console.log(this.props.history);
    this.props.history.push(`/post/${id}`);
  }

  render() {
    var postList = this.state.posts
      .filter(
        (post) => post.title.includes("ch")
        // !this.props.authors || this.props.authors.includes(post.author)
      )
      .map((post) => (
        <div
          className="DadImgShow"
          key={post._id}
          onClick={() => this.redirectTo(post._id)}
        >
          <img className="imageToShowInHomePage" src={post.images}></img>
          <p className="title">{post.title}</p>
        </div>
      ));
    return (
      <div className="my-5">
        <StackGrid columnWidth={this.state.widthImg}>{postList}</StackGrid>
      </div>
    );
  }
}

export default withRouter(PostList);
