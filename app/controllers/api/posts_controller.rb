class Api::PostsController < ApplicationController
  def index
    @posts = Post.includes(:user, comments: [:user])
  end

  def show
    @post = Post.includes(:comments).find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.save!(post_params)
      render :show
    else
      render json: { error: "no bueno" }, status: 422    #TODO FIX
    end
  end

  def destroy
    @post = Post.find(params[:id])
    render :show if @post.destroy!
  end

  def create
    @post = Post.new(post_params)
  end

  private
  def post_params
    params.require(:post).permit(:image_url, :user_id)
  end
end
