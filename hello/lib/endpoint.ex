
defmodule HelloWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :hello

  plug Plug.Static,
    at: "/",
    from: :hello,
    only: ["css"]

  plug HelloWeb.Router
end
