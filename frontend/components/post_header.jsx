var React = require('react');

var PostHeader = React.createClass({
  render: function () {
    return (
      <header className="post-header">
        <div className="username">
          {this.props.post.user}
        </div>
        <div className="timestamp">
          {this.props.post.created_time_ago}
        </div>
      </header>
      );
  }
});

module.exports = PostHeader;
