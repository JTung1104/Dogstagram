var React = require('react');
var ApiUtil = require('../util/api_util');
var Modal = require('react-modal');

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
    backgroundColor   : '#808080',
    opacity           : 0.4
  },
  content : {

    position                   : 'static',
    display                    : 'flex',
    justifyContent             : 'space-around',
    alignItems                 : 'center',
    flexDirection              : 'column',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};

var CommentItem = React.createClass({
  getInitialState: function () {
    return { modalIsOpen: false };
  },
  openModal: function(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  deleteCommentButton: function () {
    if (this.props.comment.user_id === currentUserId) {
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
  },
  render: function () {
    return (
      <div className="comment-item">
        <a href="#" className="comment-username">{this.props.comment.user}</a>
        <p className="comment-body">{this.props.comment.body}</p>
        {this.deleteCommentButton()}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyle}>

          <button className="confirm-delete">Delete Comment</button>
          <button className="cancel-delete" onClick={this.closeModal}>Cancel</button>
        </Modal>
      </div>
    );
  }
});

module.exports = CommentItem;
