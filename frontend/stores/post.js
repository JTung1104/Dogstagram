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

var deleteComment = function (comment) {
  var post = _posts.find(function (post) {
    return post.id === comment.post_id;
  });

  if (post) {
    for (var i = 0; i < post.comments.length; i++) {
      if (post.comments[i].id === comment.id) {
        post.comments.splice(i, 1);
        break;
      }
    }
  }
};

var addLike = function (like) {
  debugger
  var post = _posts.find(function (post) {
    return post.id === like.post_id;
  });

  if (post) {
    post.likes.push(like);
  }
};

var deleteLike = function (like) {
  var post = _posts.find(function (post) {
    return post.id === like.post_id;
  });

  if (post) {
    for (var i = 0; i < post.likes.length; i++) {
      if (post.likes[i].id === like.id) {
        post.likes.splice(i, 1);
        break;
      }
    }
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
    case PostConstants.COMMENT_DELETED:
      deleteComment(payload.comment);
      PostStore.__emitChange();
      break;
    case PostConstants.LIKE_RECEIVED:
      addLike(payload.like);
      PostStore.__emitChange();
      break;
    case PostConstants.LIKE_DELETED:
      deleteLike(payload.like);
      PostStore.__emitChange();
      break;
  }
};

PostStore.all = function () {
  return _posts.slice();
};

PostStore.findById = function (id) {
  var post = _posts.find(function (post) {
    return post.id === id;
  });

  return post;
};
module.exports = PostStore;
