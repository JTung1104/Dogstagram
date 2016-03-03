var React = require('react');
var UserStore = require('../stores/user');
var SearchStore = require('../stores/search');

var SearchBar = React.createClass({
  getInitialState: function () {
    return {search: "", results: SearchStore.all()};
  },
  componentDidMount: function () {
    this.searchListener = SearchStore.addListener(this.handleChange);
  },
  componentWillUnmount: function () {
    this.searchListener.remove();
  },
  handleChange: function (e) {
    if (e) {
      this.setState({search: e.target.value});

      if (e.target.value.length > 0) {
        ApiUtil.fetchSearchResults(e.target.value, function () {
          this.setState({results: SearchStore.all()});
          // console.log(this.state.results);
        }.bind(this));
      }
    }
  },
  render: function () {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          className="search-field"
          value={this.state.search}
          onChange={this.handleChange}/>
      </div>
    );
  }
});

module.exports = SearchBar;
