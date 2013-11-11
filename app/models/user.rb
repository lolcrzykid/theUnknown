class User < ActiveRecord::Base
	has_many :drawings

	validates :email, presence: true, uniqueness: true, format: { with: /\A.+@{1}.+\.{1}.{2,}\z/,
    message: "INVALID EMAIL SON" }
  validates :password, presence:true
	
end	

