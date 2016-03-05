json.id @user.id
json.username @user.username
json.name @user.name

json.posts @user.posts do |post|
  json.id post.id
  json.image_url post.image_url

  liked = false

  json.comments post.comments do |comment|
    json.id comment.id
    json.user comment.user.username
    json.user_id comment.user_id
    json.body comment.body
  end

  json.likes post.likes do |like|
    json.id like.id
    json.post_id post.id
    json.user_id like.user.id
    json.user like.user.username

    liked = true if like.user == current_user
  end

  json.liked liked
end

followed = false

json.followers @user.followers do |follower|
  json.id follower.id
  json.user follower.username

  followed = true if follower.id == current_user.id
end

json.followed_users @user.followed_users do |followed_user|
  json.id followed_user.id
  json.user followed_user.username
end

json.followed followed
