class Drawing < ActiveRecord::Base
  belongs_to :user
  validates :user_id, :title, :image_data, presence: true         
end     
