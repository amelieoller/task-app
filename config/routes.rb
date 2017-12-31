Rails.application.routes.draw do
  root to: 'home#index'  
  namespace :api do
    resources :tasks, except: [:new, :edit]
    resources :projects, except: [:new, :edit]
  end
end
