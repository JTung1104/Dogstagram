var React = require('react');
var PostStore = require('../stores/post');
var NavBar = require('./nav_bar');
var Post = require('./post');

var PostShow = React.createClass({
  componentWillMount: function () {
    ApiUtil.fetchSinglePost(parseInt(this.props.params.id));
  },
  render: function () {
    var post = PostStore.findById(parseInt(this.props.params.id));

    return (
      <div>
        <NavBar/>
        <div className="index">
          <Post post={post}/>
        </div>
      </div>
    );
  }
});

module.exports = PostShow;
