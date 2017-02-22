import React from 'react';
import SearchBar from '../search_bar';
import UploadPictureButton from '../upload_picture_button';
import HeaderProfileLink from './header_profile_link';
import LogoutLink from './logout_link';
import makeCn from '../../util/makeCn';
import styles from './profile_nav_bar.css';
const cn = makeCn({ _:styles });

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
      <nav className={cn("profile-nav bg-white flex justify-around w-100")}>
        <h1 className={cn("logo-header dib")}>
          <a href="#" className="logo">Dogstagram</a>
        </h1>
          <SearchBar/>
        <div className="nav-right dib mt4">
          <UploadPictureButton/>
          {this.getLink()}
        </div>
      </nav>
    );
  }
});

export default ProfileNavBar;