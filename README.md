
Para testar a aplicação, acesse o link:

[https://hello-phoenix-5mjb.onrender.com/saudacao/en/Pedro](https://hello-phoenix-5mjb.onrender.com/saudacao/en/Pedro)

Você pode substituir `Pedro` pelo nome que desejar e trocar `en` por `pt` para receber a saudação em português.

Exemplos:

- `/saudacao/en/Maria`
- `/saudacao/pt/Joao`
"""

output_path = "/mnt/data/README.md"
pypandoc.convert_text(content, "md", format="md", outputfile=output_path, extra_args=["--standalone"])
print(output_path)
