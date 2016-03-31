var React = require('react'),
    FollowButton = require('./follow_button'),
    UserStore = require('../stores/user');

var ProfileStats = React.createClass({
  getInitialState: function () {
    return {shouldUpdate: false};
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.handleUpdate);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  handleUpdate: function () {
    this.setState({shouldUpdate: true});
  },
  render: function () {
    return (
      <div className="profile-stats-box">
        <div className="profile-header-name">
          <h1 className="profile-header-header">
            {this.props.user.username}
          </h1>

          <FollowButton user={this.props.user}/>
        </div>

        <div className="profile-stats-name">
          <h2 className="profile-stats-name-header">{this.props.user.name}</h2>
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
