class ApiController < ApplicationController
    def random_greeting
      greetings = ["Hello!", "Hi there!", "Greetings!"]
      render json: { greeting: greetings.sample }
    end
  end
  