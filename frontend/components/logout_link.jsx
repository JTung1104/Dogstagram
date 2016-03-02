var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;

var LogoutLink = React.createClass({
  mixins: [History],
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
