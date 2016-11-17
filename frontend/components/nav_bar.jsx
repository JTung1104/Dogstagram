import React from 'react';
import SearchBar from './search_bar';
import UploadPictureButton from './upload_picture_button';
import HeaderProfileLink from './profile/header_profile_link';

var NavBar = React.createClass({
  render: function () {
    return (
      <header className="nav-header">
        <nav className="profile-nav">
          <h1 className="logo-header">
            <a href="#" className="logo">Dogstagram</a>
          </h1>
          <SearchBar/>
          <div className="nav-right">
            <UploadPictureButton/>
            <HeaderProfileLink/>
          </div>
        </nav>
      </header>
    );
  }
});

export default NavBar;
