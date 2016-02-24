herrokitty = User.create!(
  username: "herrokitty",
  password: "kittykitty",
  session_token: User.new.generate_session_token
)

juliehuang802 = User.create!(
  username: "juliehuang802",
  password: "huanghuang",
  session_token: User.new.generate_session_token
)

doglover1027 = User.create!(
  username: "doglover1027",
  password: "doggydoggy",
  session_token: User.new.generate_session_token
)

sammilicious404 = User.create!(
  username: "sammilicious404",
  password: "sammysammy",
  session_token: User.new.generate_session_token
)

post1 = Post.create!(
  image_url: "https://unsplash.com/photos/OK1y_pUVupw",
  user_id: herrokitty.id
)
post2 = Post.create!(
  image_url: "https://unsplash.com/photos/aMIFcgCSz5M",
  user_id: herrokitty.id
)
post3 = Post.create!(
  image_url: "https://unsplash.com/photos/fpHlXbLAlsk",
  user_id: juliehuang802.id
)
post4 =Post.create!(
  image_url: "https://unsplash.com/photos/wwzQKvY6PvA",
  user_id: juliehuang802.id
)
Post.create!(
  image_url: "https://unsplash.com/photos/iPKkaPQH8vw",
  user_id: juliehuang802.id
)
post5 = Post.create!(
  image_url: "https://unsplash.com/photos/pChE-f_gqVc",
  user_id: doglover1027.id
)
post6 = Post.create!(
  image_url: "https://unsplash.com/photos/z_eFLP9aS6s",
  user_id: doglover1027.id
)
post7 = Post.create!(
  image_url: "https://unsplash.com/photos/NUMlxTPsznM",
  user_id: doglover1027.id
)
post8 = Post.create!(
  image_url: "https://unsplash.com/photos/AdJTW_dqGhY",
  user_id: sammilicious404.id
)
post9 = Post.create!(
  image_url: "https://unsplash.com/photos/JMD2xOvcLVw",
  user_id: sammilicious404.id
)
post10 = Post.create!(
  image_url: "https://unsplash.com/photos/8VcxFe_FKa4",
  user_id: sammilicious404.id
)
post11 = Post.create!(
  image_url: "https://unsplash.com/photos/bClr95glx6k",
  user_id: sammilicious404.id
)
Comment.create!(
  body: "Nice pic! lol",
  user_id: juliehuang802.id,
  post_id: post1.id
)
Comment.create!(
  body: "Wow! Nice!",
  user_id: doglover1027.id,
  post_id: post2.id
)
Comment.create!(
  body: "Teehee",
  user_id: doglover1027.id,
  post_id: post3.id
)
Comment.create!(
  body: "Ruff! Ruff!",
  user_id: doglover1027.id,
  post_id: post4.id
)
Comment.create!(
  body: "Nice pic! lol",
  user_id: juliehuang802.id,
  post_id: post5.id
)
Comment.create!(
  body: "Awesome pic!!! lol",
  user_id: herrokitty.id,
  post_id: post6.id
)
Comment.create!(
  body: "Nice pic! lol",
  user_id: herrokitty.id,
  post_id: post7.id
)
Comment.create!(
  body: "Nice pic! lol",
  user_id: herrokitty.id,
  post_id: post8.id
)
Comment.create!(
  body: "just kidding :P",
  user_id: juliehuang802.id,
  post_id: post1.id
)
Comment.create!(
  body: "妳好嗎",
  user_id: juliehuang802.id,
  post_id: post1.id
)
Comment.create!(
  body: "First!!!",
  user_id: sammilicious404.id,
  post_id: post9.id
)
Comment.create!(
  body: "First here too!!",
  user_id: sammilicious404.id,
  post_id: post10.id
)
