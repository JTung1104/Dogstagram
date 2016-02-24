var React = require('react');

var Picture = React.createClass({
  render: function () {
    var url = "http://res.cloudinary.com/dsolojfgk/image/upload/";

    return (
      <div className="picture">
        <img src={url + this.props.photoOptions + this.props.image_url} />
      </div>
    );
  }
});

module.exports = Picture;
