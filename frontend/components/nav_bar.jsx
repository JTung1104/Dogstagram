var React = require('react');
var SearchBar = require('./search_bar');

var NavBar = React.createClass({
  render: function () {
    return (
      <header className="nav-header">
        <nav className="nav">
          <h1 className="logo-header">
            <a href="#" className="logo">Dogstagram</a>
          </h1>
          <SearchBar/>
        </nav>
      </header>
    );
  }
});

module.exports = NavBar;
