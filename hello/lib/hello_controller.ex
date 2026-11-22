
defmodule HelloWeb.HelloController do
  use Phoenix.Controller, formats: [:html]

  def saudacao(conn, %{"lang" => "pt", "name" => name}) do
    conteudo = EEx.eval_file("lib/saudacao.html.eex",
      idioma: "pt",
      mensagem: "Olá, #{name}!"
    )

    html(conn, conteudo)
  end

  def saudacao(conn, %{"lang" => "en", "name" => name}) do
    conteudo = EEx.eval_file("lib/saudacao.html.eex",
      idioma: "en",
      mensagem: "Hello, #{name}!"
    )

    html(conn, conteudo)
  end
end
