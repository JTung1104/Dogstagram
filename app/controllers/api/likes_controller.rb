class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    render :show if @like.save!
  end

  def destroy
    @like = Like.find(params[:id])
    render :show if @like.destroy!
  end

  private
  def like_params
    params.require(:like).permit(:post_id)
  end
end
