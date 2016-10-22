var ApiActions = require('../actions/api_actions'),
    SearchActions = require('../actions/search_actions');

var ApiUtil = {
  fetchPosts: function (userId, callback) {
    $.ajax({
      method: "GET",
      url: "/api/posts",
      data: {userId: userId},
      success: function (data) {
        ApiActions.receiveAllPosts(data);
        callback && callback();
      },
      dataType: "json"
    });
  },
  fetchMorePosts: function (scroll, callback) {
    $.ajax({
      method: "GET",
      url: "/api/posts/",
      data: {scroll: scroll},
      success: function (data) {
        ApiActions.receiveSinglePost(data);
        callback && callback();
      },
      dataType: "json"
    });
  },
  createPost: function (data, callback) {
    $.ajax({
      method: "POST",
      url: "/api/posts/",
      data: {post: data},
      success: function (post) {
        ApiUtil.fetchPosts(null, callback);
      },
      dataType: "json"
    });
  },
  deletePost: function (id, callback) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id,
      success: function () {
        ApiActions.deletePost(id);
        callback && callback();
      },
      dataType: "json"
    });
  },
  fetchUsers: function (query, callback) {
    $.ajax({
      method: "GET",
      url: "/users/",
      data: {query: query},
      success: function (users) {
        ApiActions.receiveUsers(users);
        callback && callback();
      },
      dataType: "json"
    });
  },
  fetchUser: function (id, callback) {
    $.ajax({
      method: "GET",
      url: "/users/" + id,
      success: function (user) {
        ApiActions.receiveUser([user]);
        callback && callback();
      },
      dataType: "json"
    });
  },
  fetchSearchResults: function (query, callback) {
    $.ajax({
      method: "GET",
      url: "/users/",
      data: {query: query},
      success: function (results) {
        SearchActions.receiveSearchResults(results);
        callback && callback();
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
  destroyComment: function (comment, callback) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + comment.post_id + "/comments/" + comment.id,
      success: function (comment) {
        ApiActions.deleteComment(comment);
        callback && callback();
      },
      dataType: "json"
    });
  },
  createLike: function (like, callback) {
    $.ajax({
      method: "POST",
      url: "/api/posts/" + like.post_id + "/likes/",
      data: {like: like},
      success: function (like) {
        ApiActions.receiveLike(like);
        callback && callback();
      },
      dataType: "json"
    });
  },
  destroyLike: function (like, callback) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + like.post_id + "/likes/" + like.id,
      success: function (like) {
        ApiActions.deleteLike(like);
        callback && callback();
      },
      dataType: "json"
    });
  },
  createFollow: function (relationship, callback) {
    $.ajax({
      method: "POST",
      url: "/api/relationships",
      data: {relationship: relationship},
      success: function (relationship) {
        ApiActions.receiveFollow(relationship);
        callback && callback();
      },
      dataType: "json"
    });
  },
  destroyFollow: function (relationship, callback) {
    $.ajax({
      method: "DELETE",
      url: "/api/relationships/" + relationship.followed_id,
      success: function (relationship) {
        ApiActions.deleteFollow(relationship);
        callback && callback();
      },
      dataType: "json"
    });
  },
  logout: function (callback) {
    $.ajax({
      method: "DELETE",
      url: "/session",
      success: function () {
        callback && callback();
      }
    });
  },
  updateProfileImageUrl: function (url, callback) {
    $.ajax({
      method: "PATCH",
      url: "/users/" + currentUserId,
      data: {user: {profile_image_url: url}},
      success: function () {
        callback && callback();
      }
    });
  }
};

module.exports = ApiUtil;
