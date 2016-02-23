class Api::CommentsController < ApplicationController
  def index
  end

  def create
  end

  def destroy
  end

  def update
  end

  def show
    @comment = Comment.find(params[:id])
  end
end
