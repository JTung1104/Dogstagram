var React = require('react');

var UploadPictureButton = React.createClass({
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
          onClick={this.handleUploadPicture}>
          <img
            src="http://res.cloudinary.com/dsolojfgkabc/image/upload/v1456438256/instagram-photo-camera-logo-outline_xfplow.png"
            className="icon"/>
        </a>
      </div>
    );
  }
});

module.exports = UploadPictureButton;
