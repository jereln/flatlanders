Rails.application.routes.draw do
  get 'angular/show'
  root 'angular#show'

  namespace :apiv1 do
    resources :products
  end
end
