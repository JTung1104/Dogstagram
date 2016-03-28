var React = require('react'),
    ReactDOM = require('react-dom'),
    CommentItem = require('./comment_item');

var CommentTable = React.createClass({
  getInitialState: function () {
    return {shouldScrollBottom: false};
  },
  componentWillUpdate: function() {
    var node = ReactDOM.findDOMNode(this);
    this.state.shouldScrollBottom = node.scrollTop + node.offsetHeight === (node.scrollHeight + 1);
  },
  componentDidUpdate: function() {
    var comments = this.props.post.comments;
    if (comments.length > 0) {
      if (this.state.shouldScrollBottom || comments[comments.length - 1].user_id === currentUserId) {
        var node = ReactDOM.findDOMNode(this);
        node.scrollTop = (node.scrollHeight + 1)
      }
    }
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
