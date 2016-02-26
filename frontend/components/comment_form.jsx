var React = require('react');

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="comment-form-div">
        <a className="like-button" href="#" role="button">
          <img className="like-picture"
               src="http://res.cloudinary.com/dsolojfgkabc/image/upload/heart-shape-silhouette_sprx13.png"
               width="32"
               height="32"/>
        </a>
        <form className="comment-form">
          <input className="comment-field"
                 type="text"
                 placeholder="Add a comment..."/>
        </form>
      </div>
    );
  }
});

module.exports = CommentForm;
