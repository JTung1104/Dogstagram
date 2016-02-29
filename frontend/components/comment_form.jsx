var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CommentForm = React.createClass({
  mixins:[LinkedStateMixin],
  getInitialState: function () {
    return { body: "" }
  },
  componentDidMount: function () {

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

    var like = {
      user_id: currentUserId,
      post_id: this.props.post.id
    }

    ApiUtil.addLike(like);
  },
  handleUnlike: function (e) {
    e.preventDefault();


  },
  render: function () {
    return (
      <div className="comment-form-div">
        <a onClick={this.handleLike} className="like-button" href="#" role="button">
          <img className="like-picture"
               src="http://res.cloudinary.com/dsolojfgkabc/image/upload/heart-shape-silhouette_sprx13.png"
               width="32"
               height="32"/>
        </a>
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
