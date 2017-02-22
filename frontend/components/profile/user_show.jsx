import React from 'react';
import ProfileNavBar from './profile_nav_bar';
import Picture from '../post/picture';
import ProfileHeader from './profile_header';
import UserStore from '../../stores/user';
import PostStore from '../../stores/post';
import CommentBox from '../post/comment_box';
import ApiUtil from '../../util/api_util';
import makeCn from '../../util/makeCn';
import styles from './user_show.css';
const cn = makeCn({ _:styles });

var UserShow = React.createClass({
  getInitialState: function () {
    return {user: UserStore.findById(this.props.params.id), posts: PostStore.all()};
  },
  componentWillMount: function () {
    this.userListener = UserStore.addListener(this.handleChange);
    this.postListener = PostStore.addListener(this.handleChange);
    ApiUtil.fetchUser(this.props.params.id);
    ApiUtil.fetchPosts(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.postListener.remove();
    this.userListener.remove();
  },
  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUser(newProps.params.id, function () {
      this.setState({ user: UserStore.findById(newProps.params.id) });
    }.bind(this));

    ApiUtil.fetchPosts(newProps.params.id, function () {
      this.setState({ posts: PostStore.all() });
    }.bind(this));
  },
  handleChange: function () {
    this.setState({ user: UserStore.findById(this.props.params.id), posts: PostStore.all() });
  },
  getPictures: function () {
    var pictures = this.state.posts.map(function(post, i) {
      return (
        <Picture key={i}
          post={post}
          photoOptions="w_292,h_292,c_fill,f_auto/"
          handleDelete={this.handleChange}
          userShow={true}
          imageUrl={post.image_url}/>
      );
    }.bind(this));

    return pictures;
  },
  render: function () {
    if (!this.state.user) { return <div></div>; }

    return (
      <div className={cn("absolute absolute--fill bg-near-white")}>
        <div className={cn("flex flex-column items-center justify-center")}>
          <ProfileNavBar props={this.props}/>
          <ProfileHeader user={this.state.user}/>
          <div className={cn("_picture-grid w-two-thirds flex flex-wrap justify-between")}>
            {this.getPictures()}
          </div>
        </div>
      </div>
    );
  }
});

export default UserShow;
