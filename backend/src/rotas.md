# Rotas API Olha o Livro!

URL = localhost:3003/api

Rota                       | Request | Descrição 
-----------                | ------  | ---------
URL/user                   | POST    | Cria usuário
URL/user/\<id>             | PUT     | Atualiza usuário
URL/user/\<id>             | DELETE  | Deleta usuário
URL/user/login/\<id>       | GET     | Efetua login
URL/user/donator/\<id>     | GET     | Recupera dados do doador
URL/material               | POST    | Cria Material
URL/material/\<id>         | GET     | Recupera material
URL/material/\<id>         | PUT     | Atualiza material
URL/material/\<id>         | DELETE  | Deleta material
URL/material/list          | GET     | Recupera lista de materiais
URL/material/search        | GET     | Busca Material
URL/material/rate/\<id>    | PUT     | Atualiza nota do material