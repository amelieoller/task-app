Rails.application.routes.draw do
  root to: 'home#index'
  # get '*path', to: 'home#index'
  
  namespace :api do
    resources :tasks, except: [:new, :edit]
  end
end
