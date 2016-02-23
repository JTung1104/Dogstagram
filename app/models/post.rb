class Post < ActiveRecord::Base
  validates :image_url, :user_id, presence: true

  belongs_to :user
  has_many :comments
end
