var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchPosts: function () {
    $.ajax({
      method: "GET",
      url: "/api/posts",
      success: function (data) {
        ApiActions.receiveAllPosts(data);
      },
      dataType: "json"
    });
  },
  fetchSinglePost: function (id) {
    $.ajax({
      method: "GET",
      url: "/api/posts/" + id,
      success: function (data) {
        ApiActions.receiveSinglePost(data);
      },
      dataType: "json"
    });
  },
  createPost: function (data) {
    $.ajax({
      method: "POST",
      url: "/api/posts/",
      data: {post: data},
      success: function (post) {
        ApiActions.receiveSinglePost([post]);
      },
      dataType: "json"
    });
  },
  deletePost: function (id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id,
      success: function (post) {
        ApiActions.receiveSinglePost([post]);
      },
      dataType: "json"
    });
  },
  fetchUser: function (id) {
    $.ajax({
      method: "GET",
      url: "/users/" + id,
      success: function (user) {
        ApiActions.receiveUser([user]);
      },
      dataType: "json"
    });
  },
  createComment: function (comment, callback) {
    $.ajax({
      method: "POST",
      url: "/api/posts/" + comment.post_id + "/comments/",
      data: {comment: comment},
      success: function (comment) {
        ApiActions.receiveComment(comment);
        callback && callback();
      },
      dataType: "json"
    });
  },
  deleteComment: function (comment, callback) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + comment.post_id + "/comments/" + comment.id,
      success: function (comment) {
        ApiActions.deleteComment(comment);
      },
      dataType: "json"
    })
  },
  addLike: function (like, callback) {
    $.ajax({
      method: "POST",
      url: "/api/posts/" + like.post_id + "/likes/",
      data: {like: like},
      success: function (comment) {
        ApiActions.receiveLike(like);
        callback && callback();
      },
      dataType: "json"
    });
  }
};

module.exports = ApiUtil;
