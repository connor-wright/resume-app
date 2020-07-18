Rails.application.routes.draw do
  post 'contact_me/send'
  get 'contact_me', to: 'contact_me#contact_me'
  root 'welcome#index'
end
