var React = require('react'),
    FollowButton = require('./profile/follow_button'),
    UserStore = require('../stores/user'),
    ApiUtil = require('../util/api_util');

var SearchBar = React.createClass({
  getInitialState: function () {
    return {search: "", results: {}};
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.handleChange);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  handleChange: function (e) {
    if (e) {
      this.setState({search: e.target.value});

      if (e.target.value.length > 0) {
        ApiUtil.fetchSearchResults(e.target.value, function () {
          this.setState({results: UserStore.results()});
        }.bind(this));
      } else {
        this.setState({results: {}});
      }
    }
  },
  handleClick: function (e) {
    this.setState({search: "", results: {}});
  },
  getResults: function () {
    if (Object.keys(this.state.results).length > 0) {
      return (
        <div className="results-outer-box">
          <div className="results-inner-box">
            {this.getResultItems()}
          </div>
        </div>
      );
    }
  },
  getResultItems: function () {
    var results = this.state.results;

    var resultItems = Object.keys(results).map(function(result, i) {
      var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/w_32,h_32,c_thumb,g_face/"
      url += results[result].profile_image_url || "Empty_Profile_qvvkdi.jpg"

      return (
        <div key={i}>
          <a className="user-result-link"
             href={"/#/users/" + results[result].id}
             onClick={this.handleClick}>
            <div className="user-result-box">
              <img src={url} className="user-result-pic"/>
              <div className="user-result-username-box">
                <span className="user-result-username">{results[result].username}</span>
              </div>
            </div>
            <div className="user-result-name">
            </div>
          </a>
          <FollowButton user={results[result]}/>
        </div>
      );
    }.bind(this));

    return resultItems;
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
        {this.getResults()}
      </div>
    );
  }
});

module.exports = SearchBar;
