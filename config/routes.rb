Rails.application.routes.draw do
  root to: "staticpages#root"

  resources :users, only: [:create, :new, :update]
  resources :users, defaults: {format: :json}, only: [:index, :show]

  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: { format: :json } do
    resources :relationships, only: [:create, :destroy]
    resources :tags, only: [:index, :create, :destroy]
    resources :posts do
      resources :likes, only: [:create, :destroy]
      resources :comments, only: [:create, :destroy, :update]
      resources :taggings, only: [:create, :destroy]
    end
  end
end
