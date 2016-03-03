var React = require('react');
var PostStore = require('../stores/post');
var ApiUtil = require('../util/api_util');
var Post = require('./post');
var NavBar = require('./nav_bar');

var Index = React.createClass({
  getInitialState: function () {
    return { posts: PostStore.all() };
  },
  componentWillMount: function () {
    this.postListener = PostStore.addListener(this.handlePostChange);
    ApiUtil.fetchPosts();
  },
  componentWillUnmount: function () {
    this.postListener.remove();
  },
  handlePostChange: function () {
    this.setState({ posts: PostStore.all() })
  },
  render: function () {
    var posts = this.state.posts.map(function(post, idx) {
      return ( <Post key={idx} post={post}/> );
    }.bind(this));

    return (
      <div className="index-background">
        <NavBar/>
        <div className="index">{posts}</div>
      </div>
  );
  }
});

module.exports = Index;
