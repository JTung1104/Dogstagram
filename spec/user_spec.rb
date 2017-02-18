require 'rails_helper'

RSpec.describe User, :type => :model do
	subject { 
		described_class.new(
			username: "jtung1104",
			password_digest: "digest", 
			session_token: "tokentoken",
			created_at: DateTime.now - 1.week,
			updated_at: DateTime.now
		)
	}

	it "is valid with valid attributes" do
		expect(subject).to be_valid 
	end

	it "is not valid without a username" do
		subject.username = nil
		expect(subject).to_not be_valid
	end

	it "is not valid without a password digest" do
		subject.password_digest = nil
		expect(subject).to_not be_valid
	end

	it "is not valid without a session token" do 
		subject.session_token = nil
		expect(subject).to_not be_valid
	end

	it "is not valid without a created_at" do
		subject.created_at = nil
		expect(subject).to_not be_valid
	end 
	
	it "is valid without an updated_at" do
		subject.updated_at = nil
		expect(subject).to be_valid
	end
end 