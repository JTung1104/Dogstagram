var React = require('react');

var UploadPictureButton = React.createClass({
  handleUploadPicture: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {cloud_name: "dsolojfgk", upload_preset: "f7l58upk"},
      function (error, result) {
        if (result.length > 1) {
          console.log("Too many photos");
        } else {
          this.props.savePhotoUrl(result[0].url.slice(61));
        }
    }.bind(this));
  },
  render: function () {
    return (
      <div>
        <button
          className="upload-picture-button"
          onClick={this.handleUploadPicture}>Upload Picture</button>
      </div>
    )
  }
});

module.exports = UploadPictureButton;
