var React = require('react');
var Picture = require('./picture');
var PostHeader = require('./post_header');

var Post = React.createClass({
  render: function () {
    return (
      <article className="post">
        <PostHeader username={this.props.post.user}
                    timeAgo={this.props.post.created_time_ago}/>
        <Picture photoOptions={"w_600,c_scale/"}
                 imageUrl={this.props.post.image_url}/>
      </article>
    );
  }
});

module.exports = Post;
