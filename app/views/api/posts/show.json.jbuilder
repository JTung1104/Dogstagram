json.id @post.id
json.image_url @post.image_url
json.user @post.user.username
json.comments @post.comments do |comment|
  json.id comment.id
  json.user comment.user.username
  json.body comment.body
end
