var React = require('react'),
    PostStore = require('../stores/post'),
    NavBar = require('./nav_bar'),
    Post = require('./post'),
    ApiUtil = require('../util/api_util');

var PostShow = React.createClass({
  getInitialState: function () {
    return { post: PostStore.findById(parseInt(this.props.params.id)) };
  },
  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.handleChange);
    ApiUtil.fetchSinglePost(parseInt(this.props.params.id));
  },
  componentWillUnmount: function () {
    this.postListener.remove();
  },
  componentWillReceiveProps: function (newProps) {
    var that = this;
    ApiUtil.fetchSinglePost(parseInt(newProps.params.id), function () {
      that.setState({ post: PostStore.findById(parseInt(newProps.params.id)) });
    });
  },
  handleChange: function () {
    this.setState({ post: PostStore.findById(parseInt(this.props.params.id)) });
  },
  render: function () {
    if (this.state.post) {
      return (
        <div>
          <NavBar/>
          <div className="index">
            <Post post={this.state.post}/>
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

module.exports = PostShow;
