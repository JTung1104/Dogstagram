var React = require('react');
var ApiUtil = require('../util/api_util');
var UserStore = require('../stores/user');

var ProfileStats = React.createClass({
  getInitialState: function () {
    return {disabled: false};
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
      <div className="profile-stats-box">
        <div className="profile-header-name">
          <h1 className="profile-header-header">
            {this.props.user.username}
          </h1>

          {this.getButton()}
        </div>

        <div className="profile-stats-name">
          <h2 className="profile-stats-name-header">Kitty</h2>
          <span className="name-span"></span>
          <span className="name-span"></span>
        </div>

        <ul className="profile-stats-ul">
          <li className="post-count-li">
            <span className="profile-span-1">
              <span className="profile-span-1">
              </span>

              <span className="profile-span-2">
                {this.props.user.posts.length}
              </span>

              <span className="profile-span-1">
                {" "}posts
              </span>
            </span>
          </li>

          <li className="follower-count-li">
            <span className="profile-span-1">
              <span className="profile-span-3">
              </span>

              <span className="profile-span-2">
                {this.props.user.followers.length}
              </span>

              <span className="profile-span-1">
                {" "}followers
              </span>
            </span>
          </li>

          <li className="following-count-li">
            <span className="profile-span-1">
              <span className="profile-span-3">
              </span>

              <span className="profile-span-2">
                {this.props.user.followed_users.length}
              </span>

              <span className="profile-span-1">
                {" "}following
              </span>
            </span>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = ProfileStats;
