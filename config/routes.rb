Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/track', to: 'track#index'
  get '/track', to: 'track#show'
  get '/track/:params', to: 'track#index'

end
