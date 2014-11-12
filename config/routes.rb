Rails.application.routes.draw do
  devise_for :users
  get 'angular/show'
  root 'angular#show'

  namespace :apiv1 do
    resources :products
    resources :categories
  end
end
