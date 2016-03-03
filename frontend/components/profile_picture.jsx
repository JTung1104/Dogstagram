var React = require('react');
var Modal = require('react-modal');

var ProfilePicture = React.createClass({
  render: function () {
    return (
      <div className="profile-picture-box">
        <div className="profile-picture-square">
          <button className="change-profile-picture">
            <img title="Change profile photo"
                 src="http://res.cloudinary.com/dsolojfgkabc/image/upload/Empty_Profile_qvvkdi.jpg"/>
          </button>
        </div>

        <Modal className="modal-profile-picture">
        </Modal>
      </div>
    );
  }
});

module.exports = ProfilePicture;
