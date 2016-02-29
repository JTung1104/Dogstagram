json.id @post.id
json.image_url @post.image_url
json.user @post.user.username
json.comments @post.comments do |comment|
  json.id comment.id
  json.user comment.user.username
  json.body comment.body
end
json.likes @post.likes do |like|
  json.id like.id
  json.post_id post.id
  json.user_id like.user.id
  json.user like.user.username
end
