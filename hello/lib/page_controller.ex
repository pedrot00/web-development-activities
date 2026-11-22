
defmodule HelloWeb.PageController do
  use Phoenix.Controller

  def home(conn, _params) do
    text(conn, "Olá! Seja bem-vindo.")
  end
end
