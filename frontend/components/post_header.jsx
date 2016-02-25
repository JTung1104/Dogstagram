var React = require('react');

var PostHeader = React.createClass({
  render: function () {
    return (
      <header className="post-header">
        {this.props.username}
        <div>{this.props.timeAgo}</div>
      </header>
      );
  }
});

module.exports = PostHeader;
