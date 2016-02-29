var React = require('react');

var NumLikes = React.createClass({


  numLikes: function () {
    if (this.props.post.likes.length === 1) {
      return ("1 like");
    } else {
      return (this.props.post.likes.length.toString() + " likes");
    }
  },
  render: function () {
    return (
      <span className="num-likes">{this.numLikes()}</span>
    );
  }
});

module.exports = NumLikes;
