var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');
var PostStore = new Store(AppDispatcher);

var _posts = [];

var resetPosts = function (posts) {
  _posts = posts;
};

var attachComment = function (comment) {
  var post =_posts.find(function (post) {
    return post.id === comment.post_id;
  });

  if (post) {
    post.comments.push(comment);
  }
};

PostStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      PostStore.__emitChange();
      break;
    case PostConstants.POST_RECEIVED:
      resetPosts(payload.post);
      PostStore.__emitChange();
      break;
    case PostConstants.COMMENT_RECEIVED:
      attachComment(payload.comment);
      PostStore.__emitChange();
      break;
  }
};

PostStore.all = function () {
  return _posts.slice();
};

module.exports = PostStore;
