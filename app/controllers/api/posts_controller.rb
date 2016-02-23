class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
  end

  def show
    @post = Post.find(params[:id])
  end

  def update
  end

  def destroy
  end

  def create
    @post = Post.new(post_params)
  end

  private
  def post_params
    params.require(:post).permit(:image_url, :user_id)
  end
end
