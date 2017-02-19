require 'rails_helper'

RSpec.describe Like, :type => :model do
	subject { described_class.new(user_id: 52, post_id: 1) }

	describe "Validations" do
		it "is valid with valid attributes" do
			expect(subject).to be_valid 
		end

		it "is not valid without a post id" do
			subject.post_id = nil
			expect(subject).to_not be_valid
		end

		it "is not valid without a user id" do
			subject.user_id = nil
			expect(subject).to_not be_valid
		end
	end

	describe "Associations" do
		it { should belong_to(:user) }
		it { should belong_to(:post) }
	end
end 