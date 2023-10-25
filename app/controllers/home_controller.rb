class HomeController < ApplicationController
  def index; end

  def random_greeting
    random_message = Message.order('RANDOM()').first
    response.headers['Content-Type'] = 'application/json'
    render json: { greeting: random_message.content }
  end
end
