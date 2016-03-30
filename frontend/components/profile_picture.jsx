var React = require('react'),
    ApiUtil = require('../util/api_util'),
    Modal = require('react-modal');

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

var ProfilePicture = React.createClass({
  getInitialState: function () {
    return { modalIsOpen: false };
  },
  handleUploadPicture: function (e) {
    e.preventDefault();
    if (this.props.user.id !== currentUserId) { return; }
    // $(document).on('cloudinarywidgetsuccess', function(e, data) {
    //   $(".cloudinary-thumbnails").addClass("margin");
    //   $(".cloudinary-thumbnail").addClass("margin");
    //   $(".upload-field").addClass("opacity");
    //   $("#select").addClass("hidden");
    //   $("#upload").removeClass("hidden");
    // });

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
          that.updateProfileImageUrl();
        }
    });
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  updateProfileImageUrl: function () {
    ApiUtil.updateProfileImageUrl(this.url, this.openModal);
  },
  render: function () {
    var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/w_200,h_200,c_thumb,g_face/";
    url += this.props.user.profile_image_url || "Empty_Profile_qvvkdi.jpg";

    return (
      <div className="profile-picture-box">
        <div className="profile-picture-square">
          <button onClick={this.handleUploadPicture} className="change-profile-picture">
            <img title="Change profile photo" src={url}/>
          </button>
        </div>
      </div>
    );
  }
});

module.exports = ProfilePicture;
