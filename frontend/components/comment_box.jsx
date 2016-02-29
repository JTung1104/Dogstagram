var React = require('react');
var CommentTable = require('./comment_table');
var NumLikes = require('./num_likes');
var CommentForm = require('./comment_form');

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="comment-box">
        <NumLikes post={this.props.post}/>
        <CommentTable post={this.props.post}/>
        <CommentForm post={this.props.post}/>
      </div> );
  }
});

module.exports = CommentBox;
