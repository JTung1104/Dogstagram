class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.username = @user.username.downcase

    if @user.save
      @user.followed_users.push(User.find_by_id(2))
      @user.followed_users.push(User.find_by_id(3))
      @user.followed_users.push(User.find_by_id(4))
      @user.followed_users.push(User.find_by_id(7))
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    if query.length > 0
      @users = User.where("username LIKE ?", "%#{query}%")
      render :query
    else
      @users = User.includes(:followed_users, :followers, posts: [:likes, :comments])
    end
  end

  def show
    @user = User.includes(:followed_users, :followers, posts: [:likes, :comments]).find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end

  def query
    params[:query]
  end
end
