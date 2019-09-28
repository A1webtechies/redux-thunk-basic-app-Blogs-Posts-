import React, { Component } from "react";
import { connect } from "react-redux";

class UserName extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <h6>{user.name}</h6>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.id) };
};
export default connect(mapStateToProps)(UserName);
