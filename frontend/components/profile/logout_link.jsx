var React = require('react'),
    ApiUtil = require('../util/api_util');

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
      <a className="logout"
         href="#"
         onClick={this.handleClick}>Log out</a>
    );
  }
});

module.exports = LogoutLink;
