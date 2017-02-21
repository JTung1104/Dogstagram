import React from 'react';
import ApiUtil from '../../util/api_util';
import makeCn from '../../util/makeCn';
import styles from './logout_link.css';
const cn = makeCn({ _:styles });

var LogoutLink = React.createClass({
  redirectToNewSession: function () {
    window.location.href = "/session/new";
  },
  handleClick: function (e) {
    e.preventDefault();
    ApiUtil.logout(this.redirectToNewSession);
  },
  render: function () {
    return (
      <a className={cn("_link fl f6 fw6 montserrat relative")}
         href="#"
         onClick={this.handleClick}>Log out</a>
    );
  }
});

export default LogoutLink;
