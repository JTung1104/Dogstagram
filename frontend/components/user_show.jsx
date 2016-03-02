var React = require('react');
var NavBar = require('./nav_bar');
var UserStore = require('../stores/user');

var UserShow = React.createClass({
  getInitialState: function () {
    return { user: UserStore.findById(this.props.params.id) };
  },
  componentDidMount: function () {
  },
  render: function () {
    return (
      <div>
        <NavBar/>
      </div>
    )
  }
});

module.exports = UserShow;
