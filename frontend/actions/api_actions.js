import AppDispatcher from '../dispatcher/dispatcher';
import UserConstants from '../constants/user_constants';
import PostConstants from '../constants/post_constants';

var ApiActions = {
  receiveAllPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },
  receiveSinglePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },
  deletePost: function (id) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_DELETED,
      id: id
    });
  },
  receiveUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },
  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
  receiveComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_RECEIVED,
      comment: comment
    })
  },
  deleteComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_DELETED,
      comment: comment
    })
  },
  receiveLike: function (like) {
    AppDispatcher.dispatch({
      actionType: PostConstants.LIKE_RECEIVED,
      like: like
    });
  },
  deleteLike: function (like) {
    AppDispatcher.dispatch({
      actionType: PostConstants.LIKE_DELETED,
      like: like
    });
  },
  receiveFollow: function (relationship) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOLLOW_RECEIVED,
      relationship: relationship
    });
  },
  deleteFollow: function (relationship) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOLLOW_DELETED,
      relationship: relationship
    });
  }
};

export default ApiActions;