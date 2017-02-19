require 'rails_helper'

RSpec.describe Post, :type => :model do
	subject { described_class.new(image_url: "https://www.randomurl.com/image.jpg", user_id: 52) }

	describe "Validations" do
		it "is valid with valid attributes" do
			expect(subject).to be_valid 
		end

		it "is not valid without an image url" do
			subject.image_url = nil
			expect(subject).to_not be_valid
		end

		it "is not valid without an user id" do
			subject.user_id = nil
			expect(subject).to_not be_valid
		end
	end

	describe "Associations" do
		it { should belong_to(:user) }
		it { should have_many(:likes) }
		it { should have_many(:comments) }
	end
end 