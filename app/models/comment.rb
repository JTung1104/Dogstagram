class Comment < ActiveRecord::Base
  validates :body, :user_id, :post_id, presence: true
  
  belongs_to :user
  belongs_to :post
end
