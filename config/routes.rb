Rails.application.routes.draw do
  root to: "staticpages#root"

  resources :users, only: [:create, :new, :update]
  resource :session, only: [:create, :destroy, :new]

  namespace :api, defaults: { format: :json } do
    resources :tags, only: [:index, :create, :destroy]
    resources :posts do
      resources :taggings, only: [:create, :destroy]
    end
  end
end
