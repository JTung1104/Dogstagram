json.array! @posts do |post|
  json.image_url post.image_url
  json.user post.user.username
end
