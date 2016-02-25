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
  image_url: "photo-1456254394237-131c81cd1f58_ljbwto.jpg",
  user_id: herrokitty.id
)
post2 = Post.create!(
  image_url: "photo-1456242951842-39924e7a7876_puig4w.jpg",
  user_id: herrokitty.id
)
post3 = Post.create!(
  image_url: "photo-1456235933389-79d1d5251811_np2y4h.jpg",
  user_id: juliehuang802.id
)
post4 = Post.create!(
  image_url: "photo-1456231148835-214082199cd2_y0usou.jpg",
  user_id: juliehuang802.id
)
post12 = Post.create!(
  image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
  user_id: juliehuang802.id
)
post5 = Post.create!(
  image_url: "photo-1426287658398-5a912ce1ed0a_znpotx.jpg",
  user_id: doglover1027.id
)
post6 = Post.create!(
  image_url: "photo-1455757618770-0a58b0b28ebd_qw3han.jpg",
  user_id: doglover1027.id
)
post7 = Post.create!(
  image_url: "photo-1415904663467-dfdc16cae794_xujxyk.jpg",
  user_id: doglover1027.id
)
post8 = Post.create!(
  image_url: "photo-1444204091080-d0e664341e6b_d09xh2.jpg",
  user_id: sammilicious404.id
)
post9 = Post.create!(
  image_url: "photo-1414496213569-23220f1033cd_b6koju.jpg",
  user_id: sammilicious404.id
)
post10 = Post.create!(
  image_url: "photo-1447887781034-d96bb36d5e00_p61juk.jpg",
  user_id: sammilicious404.id
)
post11 = Post.create!(
  image_url: "photo-1452800185063-6db5e12b8e2e_rkapil.jpg",
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
Relationship.create!(
  follower_id: 1,
  followed_id: 2
)
Relationship.create!(
  follower_id: 1,
  followed_id: 3
)
Relationship.create!(
  follower_id: 1,
  followed_id: 4
)
Relationship.create!(
  follower_id: 2,
  followed_id: 1
)
Relationship.create!(
  follower_id: 2,
  followed_id: 3
)
Relationship.create!(
  follower_id: 2,
  followed_id: 4
)
Relationship.create!(
  follower_id: 3,
  followed_id: 1
)
Relationship.create!(
  follower_id: 3,
  followed_id: 2
)
Relationship.create!(
  follower_id: 3,
  followed_id: 4
)
Relationship.create!(
  follower_id: 4,
  followed_id: 1
)
