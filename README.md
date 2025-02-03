# Fake Store Promoções

Este projeto é um aplicativo React que exibe uma lista de produtos obtidos da API Fake Store. Ele faz uma requisição HTTP para buscar os produtos e os exibe em uma interface simples.

# Tecnologias Utilizadas

React

Axios

SCSS

# Instalação

Clone o repositório:

git clone https://github.com/seu-repositorio.git

# Acesse a pasta do projeto:

cd nome-do-projeto

Instale as dependências:

npm install

# Inicie o servidor de desenvolvimento:

npm start

Estrutura do Código

O código principal do projeto está no arquivo App.js e segue esta estrutura:

useState para armazenar os dados dos produtos.

useEffect para buscar os dados da API ao carregar o componente.

axios para realizar a requisição HTTP.

Estilização feita com SCSS (app.scss).

# Funcionalidades

Busca os produtos da API https://fakestoreapi.com/products.

Exibe os produtos em um grid com imagem, nome, preço e descrição.

Atualiza automaticamente os produtos ao carregar a página.

# Como Funciona

O componente principal (App.js) utiliza useEffect para chamar a função pegarDados, que busca os produtos da API Fake Store utilizando axios. Após obter os dados, eles são armazenados no estado info, que é usado para renderizar os produtos na tela.

Cada produto é renderizado em um elemento <article>, contendo:

Uma imagem (<img>)

Um título (<h2>)

Um preço formatado (<h3>)

Uma descrição (<p>)

Estilização

A estilização do aplicativo é feita utilizando SCSS no arquivo app.scss. Certifique-se de que o SCSS está configurado corretamente no seu projeto.

Melhorias Futuras

Adicionar um indicador de carregamento enquanto os dados estão sendo buscados.

Implementar filtros para os produtos.

Melhorar a responsividade e o design.