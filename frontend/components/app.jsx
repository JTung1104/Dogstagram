var React = require('react'),
    UploadPictureButton = require('./upload_picture_button'),
    Picture = require('./picture');

var App = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
