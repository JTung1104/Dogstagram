class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  default_scope -> { order(created_at: :desc) }
  validates :image_url, :user_id, presence: true
end
