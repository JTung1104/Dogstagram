var React = require('react');

var PostHeader = React.createClass({
  render: function () {
    return (
      <header className="post-header">
        <div className="username">
          <a className="hvr-pulse-grow" href={"#/users/" + this.props.post.user_id}>
            {this.props.post.user}
          </a>
        </div>
        <div className="timestamp">
          {this.props.post.created_time_ago}
        </div>
      </header>
      );
  }
});

module.exports = PostHeader;
