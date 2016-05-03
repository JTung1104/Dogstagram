var React = require('react'),
    CommentTable = require('./comment_table'),
    NumLikes = require('./num_likes'),
    CommentForm = require('./comment_form'),
    DeleteButton = require('./delete_button'),
    LikeButton = require('./like_button');

var CommentBox = React.createClass({
  getDeleteButton: function () {
    if (this.props.post.user_id === currentUserId) {
      return (
        <DeleteButton
          handleDelete={this.props.handleDelete}
          post={this.props.post}/>
      );
    }
  },
  render: function () {
    return (
      <div className="comment-box">
        <NumLikes post={this.props.post}/>
        <CommentTable click={this.props.click} post={this.props.post}/>
        <LikeButton post={this.props.post}/>
        <CommentForm post={this.props.post}/>
        {this.getDeleteButton()}
      </div>
    );
  }
});

module.exports = CommentBox;
