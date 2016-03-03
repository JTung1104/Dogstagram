class Api::RelationshipsController < ApplicationController
  def create
    @relationship = Relationship.new(relationship_params)
    @relationship.follower_id = current_user.id
    render :show if @relationship.save!
  end

  def destroy
    @relationship = Relationship.find(params[:id])
    render :show if @relationship.destroy!
  end

  private
  def relationship_params
    params.require(:relationship).permit(:followed_id)
  end
end
