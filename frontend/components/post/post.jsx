var React = require('react'),
    Picture = require('./picture'),
    PostHeader = require('./post_header'),
    CommentBox = require('./comment_box');

var Post = React.createClass({
  render: function () {
    return (
      <article className="post">
        <PostHeader post={this.props.post}/>
        <Picture post={this.props.post}
                 photoOptions={"w_600,c_scale,f_auto/"}
                 imageUrl={this.props.post.image_url}/>
               <CommentBox post={this.props.post} handleDelete={this.props.handleDelete}/>
      </article>
    );
  }
});

module.exports = Post;
