var React = require('react'),
    ApiUtil = require('../../util/api_util');

var LikeButton = React.createClass({
  getInitialState: function () {
    return { liked: this.props.post.liked }
  },
  handleLike: function (e) {
    e.preventDefault();
    var that = this;

    var like = {
      post_id: this.props.post.id
    };

    ApiUtil.createLike(like, function () {
      that.setState({liked: true});
    });
  },
  handleUnlike: function (e) {
    e.preventDefault();
    var that = this;

    if (this.state.liked) {
      this.props.post.likes.forEach(function(like) {
        if (like.user_id === currentUserId) {
          that.like_id = like.id;
        }
      });
    }

    var like = {
      id: this.like_id,
      user_id: currentUserId,
      post_id: this.props.post.id
    };

    ApiUtil.destroyLike(like, function () {
      that.setState({liked: false});
    });
  },
  likeButton: function () {
    if (this.state.liked) {
      return (
        <a onClick={this.handleUnlike} className="like-button" href="#" role="button">
          <img className="like-picture"
               src={"http://res.cloudinary.com/dsolojfgkabc/image/upload/valentines-heart_ccvqqz.png"}
               width="32"
               height="32"/>
        </a>
      );
    } else {
      return (
        <a onClick={this.handleLike} className="like-button" href="#" role="button">
          <img className="like-picture"
               src={"http://res.cloudinary.com/dsolojfgkabc/image/upload/heart-shape-silhouette_sprx13.png"}
               width="32"
               height="32"/>
        </a>
      );
    }
  },
  render: function () {
    return ( <div className="like-button-div">{this.likeButton()}</div> );
  }
});

module.exports = LikeButton;