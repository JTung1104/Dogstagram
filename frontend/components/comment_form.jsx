var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CommentForm = React.createClass({
  mixins:[LinkedStateMixin],
  getInitialState: function () {
    return { body: "", liked: this.props.post.liked }
  },
  componentWillMount: function () {
    var that = this;

    if (this.props.post.liked) {
      this.props.post.likes.forEach(function(like) {
        if (like.user_id === currentUserId) {
          that.id = like.id;
        }
      });
    }
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var that = this;

    var comment = {
      user_id: currentUserId,
      body: this.state.body,
      post_id: this.props.post.id
    }

    ApiUtil.createComment(comment, function () {
      that.setState({body: ""});
    });
  },
  handleLike: function (e) {
    e.preventDefault();
    var that = this;

    var like = {
      user_id: currentUserId,
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
          that.id = like.id;
        }
      });
    }

    var like = {
      id: this.id,
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
    return (
      <div className="comment-form-div">
        {this.likeButton()}
        <form onSubmit={this.handleSubmit} className="comment-form">
          <input className="comment-field"
                 type="text"
                 placeholder="Add a comment..."
                 valueLink={this.linkState('body')}/>
        </form>
      </div>
    );
  }
});

module.exports = CommentForm;
