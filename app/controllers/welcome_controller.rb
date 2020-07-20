class WelcomeController < ApplicationController
    #note probably dont need this
    def new
        respond_to do |format|
            format.html
            format.js
        end
    end
end
