var React = require('react');
var Modal = require('react-modal');

var ProfilePicture = React.createClass({
  render: function () {
    var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/"
    url += this.props.user.profile_image_url || "Empty_Profile_qvvkdi.jpg"
    
    return (
      <div className="profile-picture-box">
        <div className="profile-picture-square">
          <button className="change-profile-picture">
            <img title="Change profile photo" src={url}/>
          </button>
        </div>

        <Modal className="modal-profile-picture">
        </Modal>
      </div>
    );
  }
});

module.exports = ProfilePicture;
