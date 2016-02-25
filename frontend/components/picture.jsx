var React = require('react');

var Picture = React.createClass({
  render: function () {
    var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/";

    return (
      <div className="picture">
        <img src={url + this.props.photoOptions + this.props.imageUrl} />
      </div>
    );
  }
});

module.exports = Picture;
