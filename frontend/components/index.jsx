var React = require('react'),
    PostStore = require('../stores/post'),
    ApiUtil = require('../util/api_util'),
    Post = require('./post/post'),
    NavBar = require('./nav_bar');

var Index = React.createClass({
  getInitialState: function () {
    return { posts: PostStore.all(), scrollCount: 1, time: Date.now() };
  },
  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.handlePostChange);
    this.infiniteScrollToken = window.addEventListener("scroll", this.addPosts);
    ApiUtil.fetchPosts();
  },
  componentWillUnmount: function () {
    this.postListener.remove();
    window.removeEventListener('scroll', this.addPosts, false);
  },
  handlePostChange: function () {
    this.setState({ posts: PostStore.all() })
  },
  addPosts: function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && this.state.time + 1000 < Date.now()) {
      this.state.time = Date.now();
      this.state.scrollCount += 1;
      ApiUtil.fetchMorePosts(this.state.scrollCount);
    }
  },
  render: function () {
    var posts = this.state.posts.map(function(post, idx) {
      return ( <Post key={idx} post={post} handleDelete={this.handlePostChange}/> );
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
