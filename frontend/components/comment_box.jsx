var React = require('react');
var CommentTable = require('./comment_table');
var NumLikes = require('./num_likes');

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="comment-box">
        <NumLikes/>
        <CommentTable comments={this.props.post.comments}/>
      </div> );
  }
});

module.exports = CommentBox;
