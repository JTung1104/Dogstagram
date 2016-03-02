var React = require('react');
var PostStore = require('../stores/post');
var NavBar = require('./nav_bar');
var Post = require('./post');
var ApiUtil = require('../util/api_util');

var PostShow = React.createClass({
  getInitialState: function () {
    return { post: PostStore.findById(parseInt(this.props.params.id)) };
  },
  componentWillMount: function () {
    var that = this;
    this.postListener = PostStore.addListener(this.handleChange);

    ApiUtil.fetchSinglePost(parseInt(this.props.params.id), function () {
      that.setState({ post: PostStore.findById(parseInt(that.props.params.id)) });
    });
  },
  componentWillUnmount: function () {
    this.postListener.remove();
  },
  handleChange: function () {
    this.setState({ post: PostStore.findById(parseInt(this.props.params.id)) });
  },
  render: function () {
    debugger
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
