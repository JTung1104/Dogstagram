var React = require('react'),
    ProfilePicture = require('./profile_picture'),
    ProfileStats = require('./profile_stats');

var ProfileHeader = React.createClass({
  render: function () {
    console.log(this.props.user);
    return (
      <header className="profile-header">
        <ProfilePicture user={this.props.user}/>
        <ProfileStats user={this.props.user}/>
      </header>
    )
  }
});

module.exports = ProfileHeader;
