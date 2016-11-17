import React from 'react';
import ProfilePicture from './profile_picture'
import ProfileStats from './profile_stats';

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

export default ProfileHeader;
