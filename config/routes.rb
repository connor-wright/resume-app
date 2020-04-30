Rails.application.routes.draw do
  root 'welcome#index'
  get  '/about_me', to: 'welcome#index'
  get  '/experience', to: 'welcome#index'
  get  '/projects', to: 'welcome#index'
  get  '/skills', to: 'welcome#index'
end
