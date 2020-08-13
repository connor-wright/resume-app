class ContactMeController < ApplicationController
  def contact_me 
    respond_to do |format|
      format.js
      format.html
    end
  end
end
