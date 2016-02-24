# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### POSTS

- `GET /api/posts`
  - Posts index/search
  - accepts `tag_name` query param to list posts by tag
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### COMMENTS

- `GET /api/posts/:id/comments`
  - comments index/search
- `POST /api/posts/:id/comments`
- `GET /api/posts/:id/comments/:id`
- `PATCH /api/posts/:id/comments/:id`
- `DELETE /api/posts/:id/comments/:id`

### Tags

- A post's tags will be included in the post show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/posts/:post_id/tags`: add tag to post by name
- `DELETE /api/posts/:post_id/tags/:tag_name`: remove tag from post by name
