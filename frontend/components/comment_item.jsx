var React = require('react');

var CommentItem = React.createClass({
  handleDelete: function (e) {
    e.preventDefault();
  },
  render: function () {
    return (
      <div className="comment-item">
        <a href="#" className="comment-username">{this.props.comment.user}</a>
        <p className="comment-body">{this.props.comment.body}</p>
        <i className="delete-comment" onClick={this.handleDelete}/>
      </div>
    );
  }
});

module.exports = CommentItem;
