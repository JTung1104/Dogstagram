json.array! @posts do |post|
  time_in_seconds = (Time.now.to_i - Time.at(post.created_at).to_i)
  time_in_minutes = time_in_seconds / 60
  time_in_hours = time_in_minutes / 60
  time_in_days = time_in_hours / 24
  time_in_weeks = time_in_days / 7

  time = time_in_seconds.to_s + "s"
  time = time_in_minutes.to_s + "m" if time_in_seconds >= 60
  time = time_in_hours.to_s + "h" if time_in_minutes >= 60
  time = time_in_days.to_s + "d" if time_in_hours >= 24
  time = time_in_weeks.to_s + "w" if time_in_days >= 7

  liked = false
  like_id = nil

  json.id post.id
  json.image_url post.image_url
  json.user post.user.username
  json.user_id post.user_id
  json.created_time_ago time
  json.profile_image_url post.user.profile_image_url
  
  json.likes post.likes do |like|
    json.id like.id
    json.post_id post.id
    json.user_id like.user.id
    json.user like.user.username

    if like.user == current_user
      liked = true
      like_id = like.id
    end
  end

  json.liked liked
  json.like_id like_id

  json.comments post.comments do |comment|
    json.id comment.id
    json.user comment.user.username
    json.user_id comment.user_id
    json.body comment.body
  end
end
