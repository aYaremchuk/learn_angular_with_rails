Rails.application.routes.draw do
  devise_for :users
  get 'dashboard/index'
  resources :customers, only: [:index]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'dashboard#index'
  get 'angular_test' => 'angular_test#index'
end
