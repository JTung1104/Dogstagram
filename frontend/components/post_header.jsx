var React = require('react');

var PostHeader = React.createClass({
  render: function () {
    return (
      <header className="post-header">
        <div className="username">
          {this.props.username}
        </div>
        <div className="timestamp">
          {this.props.timeAgo}
        </div>
      </header>
      );
  }
});

module.exports = PostHeader;
