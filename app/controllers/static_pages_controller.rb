class StaticPagesController < ApplicationController
  before_action :index, :authenticate_user!

  def index
    # respond_to do |format| 
    #   format.json { }
    # end
  end


end
