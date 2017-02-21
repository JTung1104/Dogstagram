import React from 'react';
import makeCn from '../../util/makeCn';
import styles from './num_likes.css';
const cn = makeCn({ _:styles });

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
      <span className={cn("num-likes helvetica f6")}>{this.numLikes()}</span>
    );
  }
});

export default NumLikes;
