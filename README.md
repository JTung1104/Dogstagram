#Dogstagram
*Ruby, Ruby on Rails, Javascript, React, Flux*

[Dogstagram](http://www.dogstagram.club)

Dogstagram is a web application for dog selfies inspired by Instagram built
using Ruby on Rails and React.js.


## Features

Dogstagram allows users to:

- Create an account
- Log in / Log out
- Follow Users
- Create, Read, and Delete Posts
- Like Posts
- Create, Read, and Delete Comments


## Implementation Details

###Custom made user authentication
I overwrote the password= method using the BCrypt gem in the user model to store a hashed and salted password:
```Ruby
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end
```

Incoming passwords can then be compared against the stored password hash to see if the password is correct
```Ruby
def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end
```

A users session is then stored as a session token to remember a user is signed in at a specific computer
```Ruby
def reset_token!
  self.session_token = generate_session_token
  self.save
  self.session_token
end
```

I implement a check for duplicate session tokens for the security of all my users' accounts.
While it is uncommon for the same token to be generated twice, it becomes more likely to happen as the user base grows.
```Ruby
def generate_session_token
  token = SecureRandom.urlsafe_base64(16)

  while User.exists?(session_token: token)
    token = SecureRandom.urlsafe_base64(16)
  end

  token
end
```

###Feed based on user follows
The feed only displays posts from users that the current user is following, with most recent first
```Ruby
def index
  following_ids = "SELECT followed_id FROM relationships
                   WHERE  follower_id = :user_id"

  @posts = Post.includes(:user, :likes, comments: [:user])
    .where("user_id IN (#{following_ids})
            OR user_id = :user_id", user_id: current_user.id)
end
```

##Included Gems and Libraries
- BCrypt
- Figaro
- React

### Bonus Features (TBD)
- Edit images with filters
- Pagination / infinite scroll for Images feed
- Add videos
- Add notifications and user tagging
