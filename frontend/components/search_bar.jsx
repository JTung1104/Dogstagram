var React = require('react');
var UserStore = require('../stores/user');

var SearchBar = React.createClass({
  getInitialState: function () {
    return {stuff: ""};
  },
  render: function () {
    return (
      <div className="search">
        <input
          type="text" placeholder="Search" className="search-field"
          onChange={this.handleChange}/>
      </div>
    );
  }
});

module.exports = SearchBar;
