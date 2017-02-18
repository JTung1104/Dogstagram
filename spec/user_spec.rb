require 'rails_helper'

RSpec.describe User, :type => :model do
	subject { described_class.new }

	it "is valid with valid attributes" do
		subject.username = "jtung1104"
		subject.password_digest = "digest"
		subject.session_token = "tokentokentoken"
		subject.created_at = DateTime.now
		expect(subject).to be_valid 
	end

	it "is not valid without a username" do
		expect(subject).to_not be_valid
	end

	it "is not valid without a password digest" do
		subject.username = "jtung1104"
		expect(subject).to_not be_valid
	end

	it "is not valid without a session token" do 
		subject.username = "jtung1104"
		subject.password_digest = "digest"
		subject.session_token = nil
		expect(subject).to_not be_valid
	end

	it "is not valid without a created_at" do
		subject.username = "jtung1104"
		subject.password_digest = "digest"
		subject.session_token = "tokentokentoken"
		expect(subject).to_not be_valid
	end 
	
	it "is valid without an updated_at" do
		subject.username = "jtung1104"
		subject.password_digest = "digest"
		subject.session_token = "tokentokentoken"
		subject.created_at = DateTime.now
		expect(subject).to be_valid
	end
end 