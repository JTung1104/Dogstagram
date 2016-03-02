var React = require('react');
var Picture = require('./picture');
var PostHeader = require('./post_header');
var CommentBox = require('./comment_box');

var Post = React.createClass({
  render: function () {
    return (
      <article className="post">
        <PostHeader post={this.props.post}/>
        <Picture photoOptions={"w_600,c_scale/"}
                 imageUrl={this.props.post.image_url}/>
        <CommentBox post={this.props.post}/>
      </article>
    );
  }
});

module.exports = Post;
