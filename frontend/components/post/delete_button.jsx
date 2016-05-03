var React = require('react'),
    Modal = require('react-modal'),
    APIUtil = require('../../util/api_util');

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

var DeleteButton = React.createClass({
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
  handleDelete: function (e) {
    e.preventDefault();
    ApiUtil.deletePost(this.props.post.id, function () {
      this.props.handleDelete();
    }.bind(this));
  },
  render: function () {
    return (
      <div className="delete-post-div">
        <button
          title="Delete Post"
          className="delete-post"
          onClick={this.openModal}/>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyle}>

          <button className="confirm-delete" onClick={this.handleDelete}>
            Delete Post
          </button>

          <button className="cancel-delete" onClick={this.closeModal}>
            Cancel
          </button>
        </Modal>
      </div>
    );
  }
});

module.exports = DeleteButton;
