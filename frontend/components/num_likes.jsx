var React = require('react');

var NumLikes = React.createClass({
  render: function () {
    return (
      <span className="num-likes">0 likes</span>
    );
  }
});

module.exports = NumLikes;
