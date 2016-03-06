var React = require('react');
var Modal = require('react-modal');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CommentForm = require('./comment_form');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;
var PostStore = require('../stores/post');

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
    background                 : '#FAFAFA',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};

var UploadPictureButton = React.createClass({
  mixins: [LinkedStateMixin, History],
  getInitialState: function () {
    return { body: "", modalIsOpen: false };
  },
  handleUploadPicture: function (e) {
    e.preventDefault();

    $(document).on('cloudinarywidgetsuccess', function(e, data) {
      $(".cloudinary-thumbnails").addClass("margin");
      $(".cloudinary-thumbnail").addClass("margin");
      $(".upload-field").addClass("opacity");
      $("#select").addClass("hidden");
      $("#upload").removeClass("hidden");
    });

    settings = Object.assign({}, CLOUDINARY);
    settings["theme"] = "white"
    settings["thumbnails"] = ".upload-field";
    settings["thumbnail_transformation"] = "w_300,h_250,c_fill";

    var that = this;
    cloudinary.openUploadWidget(
      settings,
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

    var that = this;
    ApiUtil.createPost(post, function (post) {
      that.history.pushState({}, "/posts/" + post.id, {});
    });

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
            src="http://res.cloudinary.com/dsolojfgkabc/image/upload/instagram-photo-camera-logo-outline_fubte5.png"
            className="icon"/>
        </a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyle}>

          <button id="select"
                  className="upload-modal-button visible"
                  onClick={this.handleUploadPicture}>Select Photo</button>

                <div className="upload-field"></div>

          <input className="modal-comment-field"
                 type="text"
                 placeholder="Add a caption..."
                 valueLink={this.linkState('body')}/>

          <button id="upload"
                  onClick={this.handleSubmit}
                  className="upload-modal-button visible hidden">Upload</button>
        </Modal>
      </div>
    );
  }
});

module.exports = UploadPictureButton;
