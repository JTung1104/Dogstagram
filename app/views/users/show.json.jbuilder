json.id @user.id
json.username @user.username
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
