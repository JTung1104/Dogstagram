var React = require('react');
var ProfileNavBar = require('./profile_nav_bar');
var Picture = require('./picture');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');

var UserShow = React.createClass({
  getInitialState: function () {
    return { user: UserStore.findById(parseInt(this.props.params.id)) };
  },
  componentWillMount: function () {
    this.userListener = UserStore.addListener(this.handleChange);
    ApiUtil.fetchUser(parseInt(this.props.params.id));
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  handleChange: function () {
    this.setState({ user: UserStore.findById(parseInt(this.props.params.id)) });
  },
  pictures: function () {
    var user = UserStore.findById(parseInt(this.props.params.id));

    var pictures = user.posts.map(function(post, i) {
      return (<Picture key={i} photoOptions="w_292,h_292,c_fill/" imageUrl={post.image_url}/>);
    });

    return pictures;
  },
  render: function () {
    if (this.state.user) {
      return (
        <div className="user-show-background">
          <div className="user-show">
            <ProfileNavBar props={this.props}/>

            <div className="picture-grid">
              {this.pictures()}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
});

module.exports = UserShow;
