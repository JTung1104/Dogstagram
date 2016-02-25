var React = require('react');

var CommentItem = React.createClass({
  render: function () {
    return (
      <div className="comment-item">
        <div className="comment-username">{this.props.comment.user}</div>
        <p className="comment-body">{this.props.comment.body}</p>
      </div>
    );
  }
});

module.exports = CommentItem;
