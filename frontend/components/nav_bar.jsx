import React from 'react';
import SearchBar from './search_bar';
import UploadPictureButton from './upload_picture_button';
import HeaderProfileLink from './profile/header_profile_link';
import makeCn from '../util/makeCn';
import styles from './nav_bar.css';
const cn = makeCn({ _:styles });

var NavBar = React.createClass({
  render: function () {
    return (
      <header className={cn("bb b--light-gray")}>
        <nav className={cn("_profile flex justify-between times")}>
          <h1 className={cn("_logo-header fl ma0")}>
            <a href="#" className={cn("f3 lobster-two blue")}>Dogstagram</a>
          </h1>
          <SearchBar/>
          <div className={cn("flex items-center justify-center")}>
            <UploadPictureButton/>
            <HeaderProfileLink/>
          </div>
        </nav>
      </header>
    );
  }
});

export default NavBar;
