var React = require('react');
var ApiUtil = require('../util/api_util');
var UserStore = require('../stores/user');

var HeaderProfileLink = React.createClass({
  getInitialState: function () {
    return { username: "username" };
  },
  onChange: function () {
    this.setState({ username: UserStore.all()[0].username })
  },
  componentDidMount: function () {
    this.token = UserStore.addListener(this.onChange);
    ApiUtil.fetchUser(currentUserId);
  },
  componentWillUnmount: function () {
    this.token.remove();
  },
  render: function () {
    return (
      <a className="header-profile-link" href={"#/users/" + currentUserId}>
        {this.state.username}
      </a>
    );
  }
});

module.exports = HeaderProfileLink;
