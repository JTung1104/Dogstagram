var React = require('react');
var PostStore = require('../stores/post');
var ApiUtil = require('../util/api_util');
var Post = require('./post');
var Picture = require('./picture');
var PostHeader = require('./post_header');

var Index = React.createClass({
  getInitialState: function () {
    return {
      posts: PostStore.all()
    };
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
      return (
        <article key={idx} className="post">
          <PostHeader username={post.user} timeAgo={post.created_time_ago}/>
          <Picture photoOptions={"w_600,c_scale/"} imageUrl={post.image_url}/>
        </article>
      );
    }.bind(this));

    return ( <div className="index">{posts}</div> );
  }
});

module.exports = Index;
