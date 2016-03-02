var React = require('react');
var PostStore = require('../stores/post');
var NavBar = require('./nav_bar');
var Post = require('./post');

var PostShow = React.createClass({
  getInitialState: function () {
    return { post: PostStore.findById(parseInt(this.props.params.id)) };
  },
  componentWillMount: function () {
    this.postListener = PostStore.addListener(this.handleChange);
    ApiUtil.fetchSinglePost(parseInt(this.props.params.id));
  },
  handleChange: function () {
    this.setState({ post: PostStore.findById(parseInt(this.props.params.id)) });
  },
  render: function () {
    return (
      <div>
        <NavBar/>
        <div className="index">
          <Post post={this.state.post}/>
        </div>
      </div>
    );
  }
});

module.exports = PostShow;
