#Dogstagram

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Dogstagram is a web application for dog selfies inspired by Instagram built
using Ruby on Rails and React.js. Dogstagram allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Follow Users
- [ ] Create, Read, Update, and Delete Images
- [ ] Like Images
- [ ] Create, Read, Update, and Delete comments
- [ ] Tag images with multiple tags

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] landing page after signin

### Phase 2: Posts Model, API, and basic APIUtil (1.5 days)

**Objective:** Posts can be created, read, updated, and destroyed through
the API.

- [ ] create `Post` model
- [ ] create `Comment` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for posts (`PostsController`)
- [ ] jBuilder views for posts
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Posts can be created, read, and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each post component, building out the flux loop as needed.
  - [ ] `Image`
  - [ ] `ImageHeader`
  - [ ] `CommentBox`
  - [ ] `CommentTable`
  - [ ] `CommentItem`
  - [ ] `NumLikes`
  - [ ] `CommentForm`
  - [ ] `LikeButton`

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Tags (1.5 days)

**Objective:** Posts can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for image
  - [ ] adding tags to image
  - [ ] searching posts by tag

### Phase 6: Likes (0.5 days)

**Objective:** Posts can be liked

- [ ] create `Like` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching likes for post
  - [ ] adding likes to post

###Phase 7: Follows (1.5 days)

**Objective:** User can be follow multiple users, and feed gets populated with followed users' content.

- [ ] create `Relationship` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching images for feed
  - [ ] searching images by username

### Phase 8: Styling Cleanup and Seeding (1 day)

**Objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Edit images with filters
- [ ] Pagination / infinite scroll for Images feed
- [ ] Add videos
- [ ] Add notifications and user tagging

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
