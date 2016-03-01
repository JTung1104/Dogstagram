var React = require('react');

var UploadPictureButton = React.createClass({
  getInitialState: function () {
    return { modalIsOpen: false };
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
          className="upload-picture-button">
          <img
            src="http://res.cloudinary.com/dsolojfgkabc/image/upload/instagram-photo-camera-logo-outline_xfplow.png"
            className="icon"/>
        </a>
      </div>
    );
  }
});

module.exports = UploadPictureButton;
