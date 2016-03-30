var React = require('react');

var PostHeader = React.createClass({
  render: function () {
    var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/w_28,h_28,c_thumb,g_face/";
    url += this.props.post.profile_image_url || "Empty_Profile_qvvkdi.jpg";

    return (
      <header className="post-header">
        <a href={"#/users/" + this.props.post.user_id}>
          <img className="post-header-picture" src={url}/>
        </a>
        <div className="username">
          <a className="hvr-pulse-grow" href={"#/users/" + this.props.post.user_id}>
            {this.props.post.user}
          </a>
        </div>
        <div className="timestamp">
          {this.props.post.created_time_ago}
        </div>
      </header>
      );
  }
});

module.exports = PostHeader;
