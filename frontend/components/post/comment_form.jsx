var React = require('react'),
    ApiUtil = require('../../util/api_util');

var CommentForm = React.createClass({
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
  linkState: function (key) {
    return (event => this.setState({[key]:event.currentTarget.value}));
  },
  render: function () {
    return (
      <div className="comment-form-div">
        <form onSubmit={this.handleSubmit} className="comment-form">
          <input className="comment-field"
                 type="text"
                 placeholder="Add a comment..."
                 onChange={this.linkState('body')}
                 value={this.state.body}/>
        </form>
      </div>
    );
  }
});

module.exports = CommentForm;
