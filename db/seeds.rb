guest = User.create!(
  username: "Guest",
  password: "guestguest",
  name: "Guest",
  session_token: User.new.generate_session_token
)

herrokitty = User.create!(
  username: "herrokitty",
  password: "kittykitty",
  name: "Kitty",
  session_token: User.new.generate_session_token
)

juliehuang802 = User.create!(
  username: "juliehuang802",
  password: "huanghuang",
  name: "Julie",
  session_token: User.new.generate_session_token
)

doglover1027 = User.create!(
  username: "doglover1027",
  password: "doggydoggy",
  name: "Fido",
  session_token: User.new.generate_session_token
)

sammilicious404 = User.create!(
  username: "sammilicious404",
  password: "sammysammy",
  name: "Sammy",
  session_token: User.new.generate_session_token
)

ocastillo228 = User.create!(
  username: "OCastillo228",
  password: "password",
  name: "Orlando",
  session_token: User.new.generate_session_token
)

cdpc316 = User.create!(
  username: "cdpc316",
  password: "password",
  name: "Cristian",
  session_token: User.new.generate_session_token
)

ruchitaqt = User.create!(
  username: "ruchitaqt",
  password: "password",
  name: "Ruchita",
  session_token: User.new.generate_session_token
)

lancemcpants = User.create!(
  username: "lancemcpants",
  password: "pantspants",
  name: "Lance",
  session_token: User.new.generate_session_token
)

tullie = User.create!(
  username: "Tullie",
  password: "heapsheaps",
  name: "Tullie",
  session_token: User.new.generate_session_token
)

lee337 = User.create!(
  username: "lee337",
  password: "password",
  name: "Lee",
  session_token: User.new.generate_session_token
)

post1 = Post.create!(
  image_url: "photo-1455380579765-810023662ea2_zku94z.jpg",
  user_id: herrokitty.id
)

Comment.create!(
  body: "Just chilling on the floor waiting for my human",
  user_id: herrokitty.id,
  post_id: post1.id
)

Comment.create!(
  body: "I do that too! hehe",
  user_id: juliehuang802.id,
  post_id: post1.id
)

Comment.create!(
  body: "Fantastic photo mate",
  user_id: tullie.id,
  post_id: post1.id
)

post2 = Post.create!(
  image_url: "photo-1427435150519-42d9bcd0aa81_m0cm4v.jpg",
  user_id: juliehuang802.id
)

Comment.create!(
  body: "My human was scared, she was lucky to have me there. Hehe",
  user_id: juliehuang802.id,
  post_id: post2.id
)

Comment.create!(
  body: "Look at all those trees",
  user_id: herrokitty.id,
  post_id: post2.id
)

Comment.create!(
  body: "Thanks for the invite :(",
  user_id: lancemcpants.id,
  post_id: post2.id
)

post3 = Post.create!(
  image_url: "photo-1453365607868-7deed8cc7d26_crhxgm.jpg",
  user_id: herrokitty.id
)

Comment.create!(
  body: "That feel when you find some food on the floor",
  user_id: herrokitty.id,
  post_id: post3.id
)

Comment.create!(
  body: "What did you find? Was it peanut butter?!",
  user_id: lee337.id,
  post_id: post3.id
)

#TODO go over the rest of this
post4 = Post.create!(
  image_url: "photo-1456231148835-214082199cd2_y0usou.jpg",
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
post12 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post13 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post14 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post15 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post16 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post17 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post18 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post19 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post20 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post21 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post22 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post23 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post24 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post25 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post26 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post27 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post28 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post29 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post30 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post31 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post32 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post33 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post34 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post35 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post36 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post37 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post38 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post39 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post40 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
)
post41 = Post.create!(
image_url: "photo-1456221670210-b0227a67f655_l2gebz.jpg",
user_id: juliehuang802.id
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
