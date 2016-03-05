var React = require('react'),
    Modal = require('react-modal'),
    CommentBox = require('./comment_box');

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
    flexDirection              : 'row',
    border                     : 'none',
    background                 : '#FAFAFA',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '0px',
    height                     : 'auto',
    width                      : 'auto'
  }
};

var Picture = React.createClass({
  getInitialState: function () {
  return {modalIsOpen: false};
  },
  openModal: function(i) {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  getPictureHover: function () {
    if (this.props.userShow) {
      var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/",
          photoOptions="w_600,h_600,c_fill/",
          likes = this.props.post.likes.length,
          comments = this.props.post.comments.length;

      return (
        <div onClick={this.openModal} className="picture-hover">
          <div className="picture-stats-box">
            <span className="like-icon"></span>
            <span className="like-count">{likes}</span>
            <span className="comment-icon"></span>
            <span className="comment-count">{comments}</span>

          <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyle}>

              <div className="picture">
                <img src={url + photoOptions + this.props.imageUrl}/>
              </div>

              <div className="modal-comment-box">
                <CommentBox post={this.props.post}/>
              </div>
            </Modal>
          </div>
        </div>
      );
    }
  },
  render: function () {
    var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/";

    return (
      <div className="picture">
        {this.getPictureHover()}
        <img src={url + this.props.photoOptions + this.props.imageUrl}/>
      </div>
    );
  }
});

module.exports = Picture;
