var React = require('react');

var HeaderProfileLink = React.createClass({
  render: function () {
    return (
      <a className="header-profile-link" href="#">
        username
      </a>
    );
  }
});

module.exports = HeaderProfileLink;
