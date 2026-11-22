
defmodule HelloWeb.Router do
  use Phoenix.Router

  get "/", HelloWeb.PageController, :home
  get "/saudacao/:lang/:name", HelloWeb.HelloController, :saudacao


end
