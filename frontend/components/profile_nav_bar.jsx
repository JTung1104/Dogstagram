var React = require('react');
var SearchBar = require('./search_bar');
var UploadPictureButton = require('./upload_picture_button');
var HeaderProfileLink = require('./header_profile_link');
var LogoutLink = require('./logout_link');

var ProfileNavBar = React.createClass({
  link: function () {
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
            {this.link()}
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = ProfileNavBar;
