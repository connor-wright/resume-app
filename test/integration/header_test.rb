require 'test_helper'

class HeaderTest < ActionDispatch::IntegrationTest
  
  test "Header should have links to appropriate pages" do
    get root_path
    assert_select "nav" do
      assert_select "a[href=?]", root_path
      assert_select "a[href=?]", "https://github.com/connor-wright/resume-app"
      assert_select "a[href=?]", "https://github.com/connor-wright"
    end
  end
end
