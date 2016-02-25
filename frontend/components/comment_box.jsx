var React = require('react');
var CommentTable = require('./comment_table');

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="comment-box">
        <CommentTable comments={this.props.post.comments}/>
      </div> );
  }
});

module.exports = CommentBox;
