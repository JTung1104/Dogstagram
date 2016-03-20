var React = require('react'),
    ProfileNavBar = require('./profile_nav_bar'),
    Picture = require('./picture'),
    ProfileHeader = require('./profile_header'),
    UserStore = require('../stores/user'),
    CommentBox = require('./comment_box'),
    ApiUtil = require('../util/api_util');

var UserShow = React.createClass({
  getInitialState: function () {
    return {user: UserStore.findById(this.props.params.id)};
  },
  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.handleChange);
    ApiUtil.fetchUser(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUser(newProps.params.id, function () {
      this.setState({ user: UserStore.findById(newProps.params.id) });
    }.bind(this));
  },
  handleChange: function () {
    this.setState({ user: UserStore.findById(this.props.params.id) });
  },
  getPictures: function () {
    var pictures = this.state.user.posts.map(function(post, i) {
      return (
        <Picture key={i}
          post={post}
          photoOptions="w_292,h_292,c_fill,f_auto/"
          userShow={true}
          imageUrl={post.image_url}/>
      );
    });

    return pictures;
  },
  render: function () {
    if (!this.state.user) { return <div></div>; }

    return (
      <div className="user-show-background">
        <div className="user-show">
          <ProfileNavBar props={this.props}/>
          <ProfileHeader user={this.state.user}/>
          <div className="picture-grid">
            {this.getPictures()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserShow;
