import React from 'react';
import ApiUtil from '../../util/api_util';
import UserStore from '../../stores/user';

var HeaderProfileLink = React.createClass({
  getInitialState: function () {
    return { username: "" };
  },
  componentDidMount: function () {
    ApiUtil.fetchUser(currentUserId, function () {
      this.setState({username: UserStore.findById(currentUserId).username});
    }.bind(this));
  },
  render: function () {
    return (
      <a className="header-profile-link" href={"#/users/" + currentUserId}>
        {this.state.username}
      </a>
    );
  }
});

export default HeaderProfileLink;
