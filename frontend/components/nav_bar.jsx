var React = require('react');
var SearchBar = require('./search_bar');
var UploadPictureButton = require('./upload_picture_button');
var HeaderProfileLink = require('./header_profile_link');

var NavBar = React.createClass({
  savePhotoUrl: function (url) {
    
  },
  render: function () {
    return (
      <header className="nav-header">
        <nav className="nav">
          <h1 className="logo-header">
            <a href="#" className="logo">Dogstagram</a>
          </h1>
          <SearchBar/>
          <div className="nav-right">
            <UploadPictureButton savePhotoUrl={this.savePhotoUrl}/>
            <HeaderProfileLink/>
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
