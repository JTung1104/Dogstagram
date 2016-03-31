json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.profile_image_url user.profile_image_url

  followed = false

  json.followers user.followers do |follower|
    json.id follower.id
    json.user follower.username
    followed = true if follower.id == current_user.id
  end

  json.followed followed
end
