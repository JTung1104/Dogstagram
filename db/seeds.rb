guest = User.create!(
  username: "guest",
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
  username: "ocastillo228",
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
  username: "tullie",
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

post4 = Post.create!(
  image_url: "photo-1456534231849-7d5fcd82d77b_tm6chj.jpg",
  user_id: tullie.id
)

Comment.create!(
  body: "When you're mad at your human, but they have food",
  user_id: tullie.id,
  post_id: post4.id
)


post5 = Post.create!(
  image_url: "photo-1436658040953-a21ef6596481_horolb.jpg",
  user_id: doglover1027.id
)

Comment.create!(
  body: "I saw another doggy!",
  user_id: doglover1027.id,
  post_id: post5.id
)

post6 = Post.create!(
  image_url: "photo-1456081445129-830eb8d4bfc6_whhss1.jpg",
  user_id: doglover1027.id
)

Comment.create!(
  body: "I'm so adorable",
  user_id: doglover1027.id,
  post_id: post6.id
)

post7 = Post.create!(
  image_url: "photo-1443750200537-00fd518bdc82_wfm1zs.jpg",
  user_id: doglover1027.id
)

Comment.create!(
  body: "Sunbathing and pondering the meaning of life",
  user_id: doglover1027.id,
  post_id: post7.id
)

post8 = Post.create!(
  image_url: "photo-1437957146754-f6377debe171_zta3ms.jpg",
  user_id: sammilicious404.id
)

Comment.create!(
  body: "Carpet naps are the best!",
  user_id: sammilicious404.id,
  post_id: post8.id
)

post9 = Post.create!(
  image_url: "photo-1444212477490-ca407925329e_dorkmu.jpg",
  user_id: sammilicious404.id
)

Comment.create!(
  body: "The 3 amigos :)",
  user_id: sammilicious404.id,
  post_id: post9.id
)

post10 = Post.create!(
  image_url: "photo-1423958950820-4f2f1f44e075_anjaq0.jpg",
  user_id: lee337.id
)

Comment.create!(
  body: "The love that lasts the longest is unrequited love",
  user_id: lee337.id,
  post_id: post10.id
)

post11 = Post.create!(
  image_url: "photo-1455757618770-0a58b0b28ebd_qw3han.jpg",
  user_id: ocastillo228.id
)

Comment.create!(
  body: "Best part of my day!",
  user_id: ocastillo228.id,
  post_id: post11.id
)

Comment.create!(
  body: "I want to go with you next time! :O",
  user_id: lee337.id,
  post_id: post11.id
)

post12 = Post.create!(
image_url: "pups.JPG_frpol6.jpg",
user_id: juliehuang802.id
)

Comment.create!(
  body: "Yummy",
  user_id: juliehuang802.id,
  post_id: post12.id
)

post13 = Post.create!(
image_url: "photo-1455557412176-951a705225c5_cv4fni.jpg",
user_id: cdpc316.id
)

Comment.create!(
  body: "Meh",
  user_id: cdpc316.id,
  post_id: post13.id
)

Comment.create!(
  body: "Aww, been there, feel better",
  user_id: juliehuang802.id,
  post_id: post13.id
)

post14 = Post.create!(
image_url: "photo-1455103493930-a116f655b6c5_hkqt9k.jpg",
user_id: cdpc316.id
)

Comment.create!(
  body: "Someone give me a treat please :P",
  user_id: cdpc316.id,
  post_id: post14.id
)

post15 = Post.create!(
image_url: "photo-1440500758936-9ec6bc937f5e_ef7slw.jpg",
user_id: cdpc316.id
)

Comment.create!(
body: "Sooooo bored",
user_id: cdpc316.id,
post_id: post15.id
)

post16 = Post.create!(
image_url: "photo-1424709746721-b8fd0ff52499_oxbgi4.jpg",
user_id: ruchitaqt.id
)

Comment.create!(
body: "There's sand in my mouth :(",
user_id: ruchitaqt.id,
post_id: post16.id
)

post17 = Post.create!(
image_url: "photo-1456143077270-30de0a1bf7bc_f1hrdp.jpg",
user_id: ruchitaqt.id
)

Comment.create!(
body: "Can't let him have my stick!",
user_id: ruchitaqt.id,
post_id: post17.id
)

post18 = Post.create!(
image_url: "photo-1450778869180-41d0601e046e_x3urqb.jpg",
user_id: lancemcpants.id
)

Comment.create!(
body: "I love this kitty!",
user_id: lancemcpants.id,
post_id: post18.id
)

post19 = Post.create!(
image_url: "photo-1452563788656-37c252ce6850_kxivb8.jpg",
user_id: ruchitaqt.id
)

post20 = Post.create!(
image_url: "photo-1452475168325-672188dc4dc3_o3oenj.jpg",
user_id: ruchitaqt.id
)

post21 = Post.create!(
image_url: "photo-1452447224378-04c089d77aa4_xk3oiw.jpg",
user_id: tullie.id
)

Comment.create!(
body: "No one told me snow was this cold...",
user_id: tullie.id,
post_id: post21.id
)

post22 = Post.create!(
image_url: "k2dal0t6n19q6j2zr05s.jpg",
user_id: tullie.id
)

Comment.create!(
body: "Brrrrr, need to run home!",
user_id: tullie.id,
post_id: post22.id
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
  follower_id: 1,
  followed_id: 5
)
Relationship.create!(
  follower_id: 1,
  followed_id: 6
)
Relationship.create!(
  follower_id: 1,
  followed_id: 7
)
Relationship.create!(
  follower_id: 1,
  followed_id: 8
)
Relationship.create!(
  follower_id: 1,
  followed_id: 9
)
Relationship.create!(
  follower_id: 1,
  followed_id: 10
)
Relationship.create!(
  follower_id: 1,
  followed_id: 11
)
