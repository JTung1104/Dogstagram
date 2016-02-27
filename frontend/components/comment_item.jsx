var React = require('react');
var ApiUtil = require('../util/api_util');

var CommentItem = React.createClass({
  deleteCommentButton: function () {
    if (this.props.comment.user_id === currentUserId) {
      return (<button className="delete-comment" onClick={this.handleDelete}/>)
    }
  },
  handleDelete: function (e) {
    e.preventDefault();

  },
  render: function () {
    return (
      <div className="comment-item">
        <a href="#" className="comment-username">{this.props.comment.user}</a>
        <p className="comment-body">{this.props.comment.body}</p>
        {this.deleteCommentButton()}
      </div>
    );
  }
});

module.exports = CommentItem;
