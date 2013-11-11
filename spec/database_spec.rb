require 'spec_helper'
require './app/models/drawing'
require './app/models/user'

describe User do

	describe "#email" do
		it { should validate_presence_of(:email) }
		it {should validate_uniqueness_of(:email)}
	end

	describe '#new' do
		# [would like to get this working, this is rspec, the rest are shouldaMatchers]
		# it 'without email parameter, user will not be saved' do
		# 	user = User.new(name: 'jerry', password: 'abcd')
		# 	user.save should be_false
		# end

		it 'Tests that a password is set' do
			should validate_presence_of(:password)
		end

		
	end
end

describe Drawing do

	it 'checks that a drawing belongs_to a user' do
		should validate_presence_of(:user_id)
	end

	it 'checks that a drawing has a title' do
		should validate_presence_of(:title)
	end
end

