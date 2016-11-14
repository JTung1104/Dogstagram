Rspec.describe User, :type => :model do
	it "is valid with valid attributes"
	it "is not valid without a username"
	it "is not valid without a password digest"
	it "is not valid without a session token"
	it "is not valid without a created_at"
	it "is not valid without a updated_at"
end 