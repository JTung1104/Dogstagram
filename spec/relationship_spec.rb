require 'rails_helper'

RSpec.describe Relationship, :type => :model do
	subject { described_class.new(follower_id: 52, followed_id: 1) }

	describe "Validations" do
		it "is valid with valid attributes" do
			expect(subject).to be_valid 
		end

		it "is not valid without a follower id" do
			subject.follower_id = nil
			expect(subject).to_not be_valid
		end

		it "is not valid without a followed id" do
			subject.followed_id = nil
			expect(subject).to_not be_valid
		end
	end

	describe "Associations" do
		it { should belong_to(:follower) }
		it { should belong_to(:followed) }
	end
end 