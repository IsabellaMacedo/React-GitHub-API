# Busca de Usuários através da API do GitHub

A aplicação possui a tela de Login e de Busca, criada com React e que consome a API do GitHub, trazendo as informações sobre o Usuário, Seguidores, Repositórios, entre outros.

### :books: Linguagens e libs utilizadas:

- React.JS,
- React Icons,
- React Router,
- Axios,
- Styled Components,
- Visual Studio Code;
- API GitHub.

### :pushpin: Como executar esta API (localmente):

#### Pré Requisitos da máquina:

- [x] Node.JS e React (como instalar: https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329 / https://celke.com.br/artigo/o-que-e-react-como-instalar-e-usar-o-react);
- [x] Clonar este repositório e instalar suas dependências no diretório ("node_modules").

#### Executar a aplicação:

Baixe os arquivos deste repositório.

No terminal da sua máquina, vá até o diretório dos arquivos baixados, e execute o comando abaixo:

```
yarn install
```

Esse comando instala no diretório do projeto as dependências necessárias para que ele seja executado (na pasta "node_modules").

Depois das dependências instaladas, ainda dentro do diretório, para iniciar a aplicação basta executar o comando:

```
yarn start
```

A aplicação estará rodando em http://localhost:3000.

Outra forma é acessando o link: https://isabellamacedo.github.io/

#### Observações sobre a API do GitHub:

Esta aplicação utiliza a API do GitHub. Ela possui um limite de 60 requisições por hora. Para controlar se você poderá fazer mais requisições e quantas faltam, foi adicionada esta informação em tela.



Esta limitação é por IP e não por usuário do GitHub. Então, caso atinja o limite, será necessário aguardar 1 hora para poder consultar novamente.

#### Endpoints da API:

Para visualizar informações de:

- Usuário: https://api.github.com/users/(nome_do_usuario)
- Lista de Repositórios: https://api.github.com/users/(nome_do_usuario)/repos
