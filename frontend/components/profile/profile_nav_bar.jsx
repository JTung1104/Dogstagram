var React = require('react'),
    SearchBar = require('./search_bar'),
    UploadPictureButton = require('./upload_picture_button'),
    HeaderProfileLink = require('./header_profile_link'),
    LogoutLink = require('./logout_link');

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

module.exports = ProfileNavBar;
