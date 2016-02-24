class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    render :show if @comment.save!
  end

  def destroy
    @comment = Comment.find(params[:id])
    render :show if @comment.destroy!
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.save!(body: params[:comment][:body])
      render :show
    else
      render json: { error: "no bueno" }, status: 422    #TODO FIX
    end
  end

  def show
    @comment = Comment.includes(:user).find(params[:id])
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end
end
