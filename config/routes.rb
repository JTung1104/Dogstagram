Rails.application.routes.draw do
  root to: "staticpages#root"

  resources :users, only: [:create, :new, :update]
  resource :session, only: [:create, :destroy, :new]

  namespace :api do
    resources :tags, only: [:index]
    resources :posts do
      resources :tags, only: [:create, :destroy]
    end
  end
end
