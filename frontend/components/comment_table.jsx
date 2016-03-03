var React = require('react');
var CommentItem = require('./comment_item');

var CommentTable = React.createClass({
  componentDidUpdate: function() {
  var node = this.getDOMNode();
  node.scrollTop = node.scrollHeight;
  },
  render: function () {
    var that = this;
    var CommentItems = this.props.post.comments.map(function(comment, idx) {
      return ( <CommentItem key={idx} post={that.props.post} comment={comment}/> );
    });

    return (
      <div className="comment-table">
        {CommentItems}
      </div>
    );
  }
});

module.exports = CommentTable;
