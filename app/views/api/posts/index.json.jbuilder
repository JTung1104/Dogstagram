json.array! @posts do |post|
  time_in_seconds = (Time.now.to_i - Time.at(post.created_at).to_i)
  time_in_minutes = time_in_seconds / 60
  time_in_hours = time_in_minutes / 60

  json.image_url post.image_url
  json.user post.user.username
  json.created_hours_ago time_in_hours
end
