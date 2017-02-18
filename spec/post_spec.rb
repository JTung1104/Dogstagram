require 'rails_helper'

RSpec.describe Post, :type => :model do
	subject { described_class.new }

	it "is valid with valid attributes" do
		subject.image_url = "https://www.randomurl.com/image.jpg"
		subject.user_id = 1
		expect(subject).to be_valid 
	end

	it "is not valid without an image url" do
		subject.user_id = 1
		expect(subject).to_not be_valid
	end

	it "is not valid without an user id" do
		subject.image_url = "https://www.randomurl.com/image.jpg"
		expect(subject).to_not be_valid
	end
end 