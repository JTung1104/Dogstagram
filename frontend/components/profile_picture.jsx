var React = require('react'),
    ApiUtil = require('../util/api_util');

var ProfilePicture = React.createClass({
  getInitialState: function () {
    return { disabled: this.props.user.id !== currentUserId };
  },
  handleUploadPicture: function (e) {
    e.preventDefault();
    if (this.props.user.id !== currentUserId) { return; }

    settings = Object.assign({}, CLOUDINARY);
    settings["theme"] = "white"
    settings["thumbnails"] = ".upload-field";
    settings["thumbnail_transformation"] = "w_300,h_250,c_fill";

    var that = this;
    cloudinary.openUploadWidget(
      settings,
      function (error, result) {
        if (typeof result === "undefined") {return;}

        if (result.length > 1) {
          console.log("Too many photos");
        } else {
          that.url = result[0].url.slice(64);
          that.updateProfileImageUrl();
        }
    });
  },
  handleUpdate: function () {
    this.setState({disabled: false});
  },
  updateProfileImageUrl: function () {
    ApiUtil.updateProfileImageUrl(this.url, this.handleUpdate);
  },
  render: function () {
    var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/w_200,h_200,c_thumb,g_face/";
    url += this.props.user.profile_image_url || "Empty_Profile_qvvkdi.jpg";

    return (
      <div className="profile-picture-box">
        <div className="profile-picture-square">
          <button
            disabled={this.state.disabled}
            onClick={this.handleUploadPicture}
            className="change-profile-picture">
              <img title="Change profile photo" src={url}/>
          </button>
        </div>
      </div>
    );
  }
});

module.exports = ProfilePicture;
