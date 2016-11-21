require 'test_helper'

class CityTest < ActiveSupport::TestCase
   test "invalid city" do
     incorrect = City.new name: cities(:two).name
     assert incorrect.invalid?
   end
  
  test "valid city" do
     incorrect = City.new name: cities(:one).name
     assert incorrect.valid?
   end
end

