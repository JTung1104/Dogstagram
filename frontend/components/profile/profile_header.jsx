import React from 'react';
import ProfilePicture from './profile_picture'
import ProfileStats from './profile_stats';
import makeCn from '../../util/makeCn';
const cn = makeCn({});

var ProfileHeader = React.createClass({
  render: function () {
    return (
      <header className={cn("-flex-center mv5")}>
        <ProfilePicture user={this.props.user}/>
        <ProfileStats user={this.props.user}/>
      </header>
    )
  }
});

export default ProfileHeader;
