var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');
var UserConstants = require('../constants/user_constants');

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
  }
};

module.exports = ApiActions;
