import React from 'react';
import SearchBar from '../search_bar';
import UploadPictureButton from '../upload_picture_button';
import HeaderProfileLink from './header_profile_link';
import LogoutLink from './logout_link';

var ProfileNavBar = React.createClass({
  getLink: function () {
    if (parseInt(this.props.props.params.id) === currentUserId) {
      return (<LogoutLink/>);
    } else {
      return (<HeaderProfileLink/>);
    }
  },
  render: function () {
    return (
      <header className="nav-header">
        <nav className="profile-nav">
          <h1 className="logo-header">
            <a href="#" className="logo">Dogstagram</a>
          </h1>
          <div className="search-div">
            <SearchBar/>
          </div>
          <div className="nav-right">
            <UploadPictureButton/>
            {this.getLink()}
          </div>
        </nav>
      </header>
    );
  }
});

export default ProfileNavBar;