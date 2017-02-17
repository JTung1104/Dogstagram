require 'rails_helper'

RSpec.describe User, :type => :model do
	it "is valid with valid attributes" do
		expect(User.new).to_not be_valid 
	end

	it "is not valid without a username"
	it "is not valid without a password digest"
	it "is not valid without a session token"
	it "is not valid without a created_at"
	it "is not valid without a updated_at"
end 