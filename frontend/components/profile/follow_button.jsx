import React from 'react';
import ApiUtil from '../../util/api_util';
import UserStore from '../../stores/user';

var FollowButton = React.createClass({
  getInitialState: function () {
    return {user: this.props.user};
  },
  componentWillReceiveProps: function (newProps) {
    this.setState({user: newProps.user});
  },
  handleFollow: function (e) {
    e.preventDefault();
    var relationship = {followed_id: this.state.user.id};
    ApiUtil.createFollow(relationship);
    if (this.props.click) {this.props.click({target: {value: this.props.query}})}
  },
  handleUnfollow: function (e) {
    e.preventDefault();
    var relationship = {followed_id: this.state.user.id};
    ApiUtil.destroyFollow(relationship);
    if (this.props.click) {this.props.click({target: {value: this.props.query}})}
  },
  getButton: function () {
    if (this.state.user.id === currentUserId) { return }

    if (this.state.user.followed) {
      return (
        <div className="follow" onClick={this.handleUnfollow}>
          <button className="unfollow-button">Unfollow</button>
        </div>
      );
    } else {
      return (
        <div className="follow" onClick={this.handleFollow}>
          <button className="follow-button">Follow</button>
        </div>
      );
    }
  },
  render: function () {
    return (
      <div className="relative">
        {this.getButton()}
      </div>
    );
  }
});

export default FollowButton;
