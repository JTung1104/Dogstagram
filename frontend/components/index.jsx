var React = require('react');
var PostStore = require('../stores/post');
var ApiUtil = require('../util/api_util');
var Post = require('./post');
var NavBar = require('./nav_bar');

var Index = React.createClass({
  getInitialState: function () {
    return {posts: PostStore.all()};
  },
  componentDidMount: function () {
    this.postListener = PostStore.addListener(this._onPostChange);
    ApiUtil.fetchPosts();
  },
  componentWillUnmount: function () {
    this.postListener.remove();
  },
  _onPostChange: function () {
    this.setState({ posts: PostStore.all() })
  },
  render: function () {
    var posts = this.state.posts.map(function(post, idx) {
      return ( <Post key={idx} post={post}/> );
    }.bind(this));

    return (
      <div>
        <NavBar/>
        <div className="index">{posts}</div>
      </div>
  );
  }
});

module.exports = Index;
