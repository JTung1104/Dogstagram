import React from 'react';
import FollowButton from './profile/follow_button';
import UserStore from '../stores/user';
import ApiUtil from '../util/api_util';
import makeCn from '../util/makeCn';
import styles from './search_bar.css';
const cn = makeCn({ _:styles });

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
        <div className={cn("_outer-box border-box absolute z2 rounded bg-white ba b--light-gray")}>
          <div className={cn("_inner-box")}>
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
          <a className={cn("_link flex bb b--light-gray brand-blue")}
             href={"/#/users/" + results[result].id}
             onClick={this.handleClick}>
            <div className={cn("_result-box")}>
              <img src={url} className={cn("_user-pic fl ba b--light-gray")}/>
              <div className={cn("my1")}>
                <span className={cn("f6 near-black helvetica")}>{results[result].username}</span>
              </div>
            </div>
          </a>
          <FollowButton query={this.state.search} click={this.handleChange} user={results[result]}/>
        </div>
      );
    }.bind(this));

    return resultItems;
  },
  render: function () {
    return (
      <div className={cn("-flex-center times relative")}>
        <input
          type="text"
          placeholder="Search"
          className={cn("_field tc helvetica f6 pa1")}
          value={this.state.search}
          onChange={this.handleChange}/>
        {this.getResults()}
      </div>
    );
  }
});

export default SearchBar;
