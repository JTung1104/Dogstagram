class Api::PostsController < ApplicationController
  def index
    if select_user_id
      @posts = Post.includes(:user, :likes, comments: [:user])
        .where(user_id: select_user_id)
    else
      following_ids = "SELECT followed_id FROM relationships
                       WHERE  follower_id = :user_id"

      @posts = Post.includes(:user, :likes, comments: [:user])
        .where("user_id IN (#{following_ids})
                OR user_id = :user_id", user_id: current_user.id)
        .limit(10 * scroll)
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.save!(post_params)
      render :show
    else
      render json: { error: "no bueno" }, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    render :index if @post.destroy!
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    @post.transaction do
      @post.save!
      @comment = Comment.new(comment_params)
      @comment.post_id = @post.id
      @comment.user_id = @post.user_id
      @comment.save! unless @comment.body == ""
    end

    render :index
  end

  private
  def post_params
    params.require(:post).permit(:image_url)
  end

  def comment_params
    params.require(:post).require(:comment).permit(:body)
  end

  def select_user_id
    params[:userId]
  end

  def scroll
    params[:scroll] ? params[:scroll].to_i : 1
  end
end
