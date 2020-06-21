class ContactMeController < ApplicationController
  def index 
    respond_to do |format|
      format.html
      format.js
    end
  end
  
  #def send_toME
    #respond_to do |format|
    #  format.html
    #  format.js
    #end
  #end
end
