var React = require('react');
var CommentItem = require('./comment_item');

var CommentTable = React.createClass({
  render: function () {
    // debugger
    var CommentItems = this.props.comments.map(function(comment, idx) {
      return ( <CommentItem key={idx} comment={comment}/> );
    });

    return (
      <div className="comment-table">
        {CommentItems}
      </div>
    );
  }
});

module.exports = CommentTable;
