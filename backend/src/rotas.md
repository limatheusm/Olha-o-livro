# Rotas API Olha o Livro!

URL = localhost:3003/api

Rota                       | Request | Passagem de dado                   |Descrição 
-----------                | ------  | -----------                        |---------
URL/user                   | POST    | Todos os dados no usuário pelo body|Cria usuário
URL/user                   | PUT     | Todos os dados do usuário pelo body com o rótulo '_id' (String)          |Atualiza usuário
URL/user/                  | DELETE  | Passagem do 'id' como parâmetro |Deleta usuário
URL/user/login             | GET     | Passagem por parâmetro: E-mail com o rótulo 'mail' e a senha pelo rótulo 'password' |Efetua login
URL/user/donator/:id       | GET     | Passagem do 'id' como parâmetro |Recupera dados do doador
URL/user/get/report        | GET     | Não precisa de nenhum parâmetro |Retorna um json com informações sobre os usuários em geral cadastrados no sistema
URL/material               | POST    | Todos os do material pelo body|Cria Material
URL/material/:id           | GET     | Passagem do 'id' como parâmetro |Recupera material
URL/material/              | PUT     | Todos os dados do material com o rótulo '_id' (String) | Atualiza material
URL/material/              | DELETE  | Passagem do 'id' como parâmetro|Deleta material
URL/material/list/:category| GET     | Passagem da categoria como parâmentro pelo rótulo 'category'|Recupera lista de materiais
URL/material/search/:title | GET     | Passagem do titulo como parâmentro pelo rótulo 'title'|Busca Material
URL/material/rate          | PUT     | Passagem do id pelo body com o rótulo '_id'|Atualiza nota do material
URL/material/get/all       | GET     | Não precisa de nenhum parâmetro    | Pegar todos os materiais do banco
URL/material/get/report    | GET     | Não precisa de nenhum parâmetro |Retorna um json com informações sobre os materiais em geral cadastrados no sistema


\***As URLS com passagem por parâmetro _URL/:var_ têm que ser usadas como: _URL/valor_**


\***As URLS com passagem por parâmetro sem _URL/:var_ têm que passar usando: _URL?mail=vini@mail.com&password=1234_**