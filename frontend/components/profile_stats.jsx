var React = require('react');

var ProfileStats = React.createClass({
  render: function () {
    return (
      <div className="profile-stats-box">
        <div className="profile-header-name">
          <h1 className="profile-header-header">
            {this.props.user.username}
          </h1>
          <a className="follow-link" href="#">
            <button className="follow-button">
              {this.getText()}
            </button>
          </a>
        </div>

        <div className="profile-stats-name">
          <h2 className="profile-stats-name-header">
            Your Name Here
          </h2>
          <span className="name-span">
          </span>
          <span className="name-span">
          </span>
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
                posts
              </span>
            </span>
          </li>

          <li className="follower-count-li">
            <span className="profile-span-1">
              <span className="profile-span-3">
              </span>

              <span className="profile-span-2">
                {this.props.user.followers}
              </span>

              <span className="profile-span-1">
                followers
              </span>
            </span>
          </li>

          <li className="following-count-li">
            <span className="profile-span-1">
              <span className="profile-span-3">
              </span>

              <span className="profile-span-2">
                {this.props.user.followed_users}
              </span>

              <span className="profile-span-1">
                following
              </span>
            </span>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = ProfileStats;
