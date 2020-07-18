class ContactMeController < ApplicationController
  def contact_me 
    respond_to do |format|
      format.js
      format.html
    end
  end
  
  #def send_toME
    #respond_to do |format|
    #  format.html
    #  format.js
    #end
  #end
end
