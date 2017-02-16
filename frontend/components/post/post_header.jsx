import React from 'react';
import styles from './post_header.css';
import makeCn from '../../util/makeCn';
const cn = makeCn({_:styles});

var PostHeader = React.createClass({
  render: function () {
    var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/w_28,h_28,c_thumb,g_face/";
    url += this.props.post.profile_image_url || "Empty_Profile_qvvkdi.jpg";

    return (
      <header className={cn("_header fw6 line-height-2")}>
        <a href={"#/users/" + this.props.post.user_id}>
          <img className="post-header-picture" src={url}/>
        </a>
        <div className={cn("_username f6 dib relative")}>
          <a className="hvr-pulse-grow" href={"#/users/" + this.props.post.user_id}>
            {this.props.post.user}
          </a>
        </div>
        <div className={cn("_timestamp relative")}>
          {this.props.post.created_time_ago}
        </div>
      </header>
      );
  }
});

export default PostHeader;