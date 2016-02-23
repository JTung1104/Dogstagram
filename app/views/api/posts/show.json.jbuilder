json.post do
  json.image_url @post.image_url
  json.user @post.user.username
end
