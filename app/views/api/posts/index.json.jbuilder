json.array! @posts do |post|
  time_in_seconds = (Time.now.to_i - Time.at(post.created_at).to_i)
  time_in_minutes = time_in_seconds / 60
  time_in_hours = time_in_minutes / 60
  time_in_days = time_in_hours / 24
  time_in_weeks = time_in_days / 7

  time = time_in_minutes.to_s + "s" if time_in_seconds >= 60
  time = time_in_hours.to_s + "h" if time_in_minutes >= 60
  time = time_in_days.to_s + "d" if time_in_hours >= 24
  time = time_in_weeks.to_s + "w" if time_in_days >= 7

  liked = false

  json.id post.id
  json.image_url post.image_url
  json.user post.user.username
  json.created_time_ago time

  json.likes post.likes do |like|
    json.id like.id
    json.post_id post.id
    json.user_id like.user.id
    json.user like.user.username

    liked = true if like.user == current_user
  end

  json.liked liked
  
  json.comments post.comments do |comment|
    json.id comment.id
    json.user comment.user.username
    json.user_id comment.user_id
    json.body comment.body
  end
end
