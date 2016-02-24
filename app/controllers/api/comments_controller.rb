class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
  end

  def destroy
    @comment = Comment.find(params[:id])
    render :show if @comment.destroy!
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.save!(comment_params)
      render :show
    else
      render json: { error: "no bueno" }, status: 422    #TODO FIX
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end
end
