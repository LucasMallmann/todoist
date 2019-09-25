# Lista de Todos ;)

Esse projet é um sistema em que você pode cadastrar seus afazeres, e separar por categorias!.

### Como executar

Para executar esse projeto, execute os seguintes passos:

```
$ git clone https://github.com/LucasMallmann/todoist.git
$ cd todoist
$ npm install (ou yarn install)
$ npm start (ou yarn start)
```

### API

Este projeto utiliza a biblioteca json-server para construir uma api fake de todos.

Para rodar o projeto, você precisa iniciar o servidor!

```
$ npx json-server --watch server.json --port 3001 -d 500
```

Esse comando irá expor a API na porta 3001, que é a mesma porta que o front-end utiliza. Caso deseje mudar a porta, é necessário mudar no front-end também. Para isso, vá no arquivo `src/services/api.js` e altere a url de conexão ;)
