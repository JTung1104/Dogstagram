var React = require('react');

var Picture = React.createClass({
  getPictureHover: function () {
    var likes = this.props.post.likes.length
    var comments = this.props.post.comments.length

    if (this.props.userShow) {
      return (
        <div className="picture-hover">
          <div className="picture-stats-box">
            <span className="like-icon"></span>
            <span className="like-count">{likes}</span>
            <span className="comment-icon"></span>
            <span className="comment-count">{comments}</span>
          </div>
        </div>
      );
    }
  },
  render: function () {
    var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/";

    return (
      <div className="picture">
        {this.getPictureHover()}
        <img src={url + this.props.photoOptions + this.props.imageUrl}/>
      </div>
    );
  }
});

module.exports = Picture;
