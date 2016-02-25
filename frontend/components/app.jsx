var React = require('react');
var UploadPictureButton = require('./upload_picture_button');
var Picture = require('./picture');

var App = React.createClass({
  render: function () {
    return (
      <div>
        App
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
