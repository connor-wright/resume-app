require 'test_helper'

class ContactMeControllerTest < ActionDispatch::IntegrationTest
  test "should get send" do
    get contact_me_send_url
    assert_response :success
  end

end
