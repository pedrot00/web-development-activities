
defmodule HelloWeb.HelloController do
  use Phoenix.Controller, formats: [:html]
  require EEx

  EEx.function_from_file(:def, :template, "lib/saudacao.html.eex", [:idioma, :mensagem])

  def saudacao(conn, %{"lang" => "pt", "name" => name}) do
    conteudo = template("pt", "Olá, #{name}!")
    html(conn, conteudo)
  end

  def saudacao(conn, %{"lang" => "en", "name" => name}) do
    conteudo = template("en", "Hello, #{name}!")
    html(conn, conteudo)
  end
end
