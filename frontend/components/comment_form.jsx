var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CommentForm = React.createClass({
  mixins:[LinkedStateMixin],
  getInitialState: function () {
    return { body: "" }
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var that = this;

    var comment = {
      body: this.state.body,
      post_id: this.props.post.id
    }

    ApiUtil.createComment(comment, function () {
      that.setState({body: ""});
    });
  },
  render: function () {
    return (
      <div className="comment-form-div">
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
