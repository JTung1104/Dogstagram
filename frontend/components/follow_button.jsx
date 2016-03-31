var React = require('react'),
    ApiUtil = require('../util/api_util'),
    UserStore = require('../stores/user');

var FollowButton = React.createClass({
  getInitialState: function () {
    return {disabled: false};
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.enableButton);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  handleFollow: function (e) {
    e.preventDefault();
    this.setState({disabled: true});
    var relationship = {followed_id: this.props.user.id};
    ApiUtil.createFollow(relationship, this.enableButton);
  },
  handleUnfollow: function (e) {
    e.preventDefault();
    var relationship = {followed_id: this.props.user.id};
    ApiUtil.destroyFollow(relationship, this.enableButton);
  },
  enableButton: function () {
    this.setState({disabled: false});
  },
  getButton: function () {
    // debugger
    if (this.props.user.id === currentUserId) { return }

    if (this.props.user.followed) {
      return (
        <a className="follow-link" href="#" onClick={this.handleUnfollow}>
          <button className="unfollow-button">Unfollow</button>
        </a>
      );
    } else {
      return (
        <a className="follow-link" href="#" onClick={this.handleFollow}>
          <button className="follow-button">Follow</button>
        </a>
      );
    }
  },
  render: function () {
    return (
      <div>
        {this.getButton()}
      </div>
    );
  }
});

module.exports = FollowButton;
