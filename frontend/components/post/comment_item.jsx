var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    Modal = require('react-modal');

var customStyle = {
  overlay : {
    position          : 'fixed',
    display           : 'flex',
    justifyContent    : 'center',
    alignItems        : 'center',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0,0.5)'
  },
  content : {
    position                   : 'static',
    display                    : 'flex',
    justifyContent             : 'space-around',
    alignItems                 : 'center',
    flexDirection              : 'column',
    border                     : 'none',
    backgroundColor            : 'rgba(128,128,128,0.4)',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '2px',
    minWidth                   : '100px',
    minHeight                  : '100px',
    height                     : '100px',
    width                      : '500px'
  }
};

var CommentItem = React.createClass({
  getInitialState: function () {
    return { modalIsOpen: false };
  },
  onClick: function (e) {
    e.preventDefault();
    if (typeof this.props.click === "function") { this.props.click(); }
    window.location.href = "#/users/" + this.props.comment.user_id;
  },
  openModal: function(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  getDeleteCommentButton: function () {
    if (this.props.comment.user_id === currentUserId || this.props.post.user_id === currentUserId) {
      return (
        <button title="Delete Comment"
                className="delete-comment"
                onClick={this.openModal}/>
      );
    }
  },
  handleDelete: function (e) {
    e.preventDefault();
    ApiUtil.destroyComment(this.props.comment);
    this.closeModal();
  },
  render: function () {
    return (
      <div className="comment-item">
        <a onClick={this.onClick}
           className="comment-username">
          {this.props.comment.user}
        </a>

        <p className="comment-body">
          {this.props.comment.body}
        </p>

        {this.getDeleteCommentButton()}

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyle}>

          <button className="confirm-delete" onClick={this.handleDelete}>
            Delete Comment
          </button>

          <button className="cancel-delete" onClick={this.closeModal}>
            Cancel
          </button>
        </Modal>
      </div>
    );
  }
});

module.exports = CommentItem;
