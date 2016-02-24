json.post do
  json.image_url @post.image_url
  json.user @post.user.username
  json.comments @post.comments do |comment|
    json.user comment.user.username
    json.body comment.body
  end
end