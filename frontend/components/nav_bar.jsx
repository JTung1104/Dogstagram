var React = require('react'),
    SearchBar = require('./search_bar'),
    UploadPictureButton = require('./upload_picture_button'),
    HeaderProfileLink = require('./profile/header_profile_link');

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

module.exports = NavBar;
