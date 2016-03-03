var React = require('react');
var ProfilePicture = require('./profile_picture');
var ProfileStats = require('./profile_stats');

var ProfileHeader = React.createClass({
  render: function () {
    return (
      <header className="profile-header">
        <ProfilePicture user={this.props.user}/>
        <ProfileStats user={this.props.user}/>
      </header>
    )
  }
});

module.exports = ProfileHeader;
