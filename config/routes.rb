Rails.application.routes.draw do
  namespace :api do
    resources :tasks, except: [:new, :edit]
    resources :projects, except: [:new, :edit]
  end
  root to: 'home#index'
  get '*path', to: 'home#index'
end

