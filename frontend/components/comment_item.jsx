var React = require('react');

var CommentItem = React.createClass({
  render: function () {
    return (
      <div className="comment-item">
        <a href="#" className="comment-username">{this.props.comment.user}</a>
        <p className="comment-body">{this.props.comment.body}</p>
      </div>
    );
  }
});

module.exports = CommentItem;
