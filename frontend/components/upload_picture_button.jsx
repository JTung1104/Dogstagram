var React = require('react');
var Modal = require('react-modal');

root = document.getElementById("root");
Modal.setAppElement(root);

var modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    background        : 'transparent'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
}

var UploadPictureButton = React.createClass({
  getInitialState: function () {
    return { modalIsOpen: false };
  },
  openModal: function () {
    this.setState({modalIsOpen: true});
  },
  closeModal: function () {
    this.setState({modalIsOpen: false});
  },
  handleUploadPicture: function (e) {
    e.preventDefault();

    cloudinary.openUploadWidget(
      CLOUDINARY,
      function (error, result) {
        if (result.length > 1) {
          console.log("Too many photos");
        } else {
          // style modal
          // push state to trigger second modal
          // pass it the savePhotoUrl
          this.props.savePhotoUrl(result[0].url.slice(61));
        }
    }.bind(this));
  },
  render: function () {
    return (
      <div>
        <a href="#"
          className="upload-picture-button"
          onClick={this.openModal}>
          <img
            src="http://res.cloudinary.com/dsolojfgkabc/image/upload/instagram-photo-camera-logo-outline_xfplow.png"
            className="icon"/>
        </a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closemodal}
          style={modalStyle}>
        </Modal>
      </div>
    );
  }
});

module.exports = UploadPictureButton;
