class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    render :show if @comment.save!
  end

  def destroy
    @comment = Comment.find(params[:id])
    render :show if @comment.destroy!
  end

  def show
    @comment = Comment.includes(:user).find(params[:id])
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end
end
