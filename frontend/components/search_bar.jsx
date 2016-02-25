var React = require('react');

var SearchBar = React.createClass({
  render: function () {
    return (
      <div className="search">
        <input type="text" placeholder="Search" className="search-field"/>
      </div>
    )
  }
});

module.exports = SearchBar;
