# API START WARS

O objetivo desta API consiste em guardar e gerenciar informações de planetas dos filmes da franquia.

Está aplicação foi soliciada para testar as minhas habilidades em um processo seletivo para **back-end developer**.

Esta API é desenvolvida ultilizando o **Node js** junto com o banco de dados não relacional chamado **MongoDB**.

## Intruções para a instalação

1. Clone o repositório para o seu computador.

~~~~
git clone https://github.com/christian-de-ornellas/api-starwars.git
~~~~

2. Instale as dependencias usando o **npm**.

~~~~
npm install
~~~~

3. No seu terminal e dentro pasta da aplicação, execute comando abaixo.

~~~~
npm start
~~~~

## Rotas da API

A API é acessada mediante a uma autenticação por JWT, siga os passos abaixo.

### Cadastro de usuário

Para cadastrar o usuário acesse a url abaixo e coloque os campos da requisição.

~~~~
http://localhost:3000/auth/register
~~~~

REQUEST =  **POST**
~~~~
{
	"name": "Testador",
	"email": "auth@test.com.br",
	"password": "123456"
	
}
~~~~

### Autenticação de Usuário
Digite o e-mail e senha cadastrada para logar, após a autenticação será retornado um **token** para você colocar no **Bearer** do **postman, insomnia** ou software rest de sua escolha.
~~~~
http://localhost:3000/auth/register
~~~~

REQUEST =  **POST**
~~~~
{	
	"email": "auth@test.com.br",
	"password": "123456"
	
}
~~~~

### Cadastrar Planeta

Para cadastrar um planeta você precisa inserir os dados do planeta como no exemplo abaixo.

~~~~
http://localhost:3000/planets
~~~~

REQUEST =  **POST**
~~~~
{
	"name": "Dagobah",
	"climate": "murky",
	"terrain": "swamp, jungles"
}
~~~~

### Listar todos Planetas

Para listar todos os planetas cadastrados você precisa executar um **REQUEST GET** usando o endereço abaixo.

~~~~
http://localhost:3000/planets
~~~~

### Consultar planeta por id

Para consultar planeta por id você precisa acessa a rota **listar todos os planetas** copiar o id de um planeta e executar o **REQUEST GET** como no exemplo abaixo.

~~~~
http://localhost:3000/planets/iddoplaneta
~~~~

### Consultar planeta por nome

Para consultar planeta por id você precisa acessa a rota **listar todos os planetas** copiar o nome de um planeta e executar o **REQUEST GET** como no exemplo abaixo.

~~~~
http://localhost:3000/planets/nomedoplaneta
~~~~

### Remover um planeta

Para remover planeta você precisa acessa a rota **listar todos os planetas** copiar o id de um planeta colar na url e executar o **REQUEST DELETE** como no endereço abaixo.

~~~~
http://localhost:3000/planets/iddoplaneta
~~~~

### Atualizar Planeta

Para atualizar um planeta você precisa acessa a rota **listar todos os planetas** copiar o id do planeta que deseja atualizar e colar na rota como no exemplo abaixo, alterar as informações e executar.

~~~~
http://localhost:3000/planets/iddoplaneta
~~~~

REQUEST =  **POST**
~~~~
{
	"name": "Dagobah",
	"climate": "murky",
	"terrain": "swamp, jungles"
}
~~~~





