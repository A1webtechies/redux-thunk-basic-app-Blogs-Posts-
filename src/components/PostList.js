import React, { Component } from "react";
import { connect } from "react-redux";
import PostListItem from "./PostListItem";
import { fetchPostsAndUser } from "../actions";
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUser();
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="collection">
        <PostListItem posts={posts} />
      </div>
    );
  }
}
const mapStateToProps = ({ posts }) => {
  return { posts };
};
export default connect(
  mapStateToProps,
  { fetchPostsAndUser }
)(PostList);
