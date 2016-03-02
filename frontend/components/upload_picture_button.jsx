var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CommentForm = require('./comment_form');
var ApiUtil = require('../util/api_util');

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
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};

var UploadPictureButton = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return { body: "", modalIsOpen: false };
  },
  handleUploadPicture: function (e) {
    e.preventDefault();
    var that = this;

    cloudinary.applyUploadWidget(
      document.getElementById('upload-modal-button'),
      CLOUDINARY,
      function (error, result) {
        if (result.length > 1) {
          console.log("Too many photos");
        } else {
          that.url = result[0].url.slice(64);
        }
    });
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var post = {
      image_url: this.url,
        comment: {
          body: this.state.body
        }
    };

    ApiUtil.createPost(post);
    this.closeModal();
  },
  openModal: function(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  render: function () {
    return (
      <div>
        <a onClick={this.openModal} href="#"
           className="upload-picture-button">
          <img
            src="http://res.cloudinary.com/dsolojfgkabc/image/upload/instagram-photo-camera-logo-outline_xfplow.png"
            className="icon"/>
        </a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyle}>

          <button id="upload-modal-button"
                  onClick={this.handleUploadPicture}>Select Photo</button>

        <input className="modal-comment-field"
                 type="text"
                 placeholder="Add a caption..."
                 valueLink={this.linkState('body')}/>

          <button onClick={this.handleSubmit}
                  className="upload-modal-button">Upload</button>
        </Modal>
      </div>
    );
  }
});

module.exports = UploadPictureButton;
