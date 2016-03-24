var React = require('react'),
    CommentTable = require('./comment_table'),
    NumLikes = require('./num_likes'),
    CommentForm = require('./comment_form'),
    LikeButton = require('./like_button');

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="comment-box">
        <NumLikes post={this.props.post}/>
        <CommentTable post={this.props.post}/>
        <LikeButton post={this.props.post}/>
        <CommentForm post={this.props.post}/>
      </div>
    );
  }
});

module.exports = CommentBox;
