# ProjetoBackendNodejsNextjs
Original walkthrough: Programador Nomade (https://youtube.com/playlist?list=PLiAtrBwy0tAMsFf7fKDmr94vBe5_fJivy)
<br>

## About
This project has been created using Node.js for backend and Next.js for frontend. The owner project is Emerson Saturino (@emerson_saturnino on Instagram) from the channel <a href="https://www.youtube.com/channel/UCoda2nAStlC-jvgeBgR0J7A">Programador Nomade</a> following the playlist <a href="https://www.youtube.com/playlist?list=PLiAtrBwy0tAMsFf7fKDmr94vBe5_fJivy">Projeto Backend NodeJs + Frontend NextJs</a>.<br><br>

## O que aprendi (PT-BR)
* Vídeo 01 - Aprensentação do tutorial, das tecnologias utiliazdas, como JWT, MongoDB, sucrase, etc.
* Vídeo 02 - 
    * Iniciar um projeto com "npm init" e suas configurações. 
    * Uma breve introdução do que são os números apresentados em uma semântica de versionamento (1.0.0), onde o número mais da direita é correção de bugs, o do meio significa imprementação de funções novas e o último, mais da esquerda, é a versão de fato, uma atualização drástica, uma quebra de compatibilidade.
    * O que são keywords, que servem para melhorar a busca do projeto.
    * Um pouco de licenças.<br><br>
* Video 03 - Explicação sobre a estrutura de pastas utilizadas
    * Routes: serve para organizar todas as rotas criadas no backend para cada uma das funcionalidades.
    * Services - Pasta muito importante, serve para criar toda a lógica, regras de negócio, controle de verificações em banco de dados, faz todo o controle de finalizações das operações, etc, do servidor.
    * Controllers - recebe todas as requisições do frontend ou consumidor da api. De forma simplificada, é ele quem faz "o meio de campo" entre o usuário e o banco de dados. Ele que deve chamar os services para realizar as operações necessárias. Recebe a resposta do service e é o controller que dará o retorno para o usuário sobre o resultado da operação solicitada.
    * Models - realiza todas as operações no banco de dados. Inserções, alterações, leitura, etc, todas as operações que devem ser feitas no banco de dados. Recebe as ordens do controller.
    * usuário -> routes -> controller -> service -> model -> banco de dados<br><br>
* Vídeo 04 - 
    * Express - Utilizado para montar o servidor e deixar tudo funcionando.
    * Nodemon - Impede que o servidor precise ser reiniciado toda vez que uma alteração seja feita nos arquivos.
    * Sucrase - Utiliza "import" ao invés de "require" no momento de adicionar novos arquivos (opcional).
    * Conceitos como rotas, classes para organizar, para que serve os arquivos app.js, server.js, routes/index.js. Configurações iniciais para nodemon, criação do script para manter o servidor ligado (nodemon).<br><br>
* Vídeo 05 - Nesse vídeo foram feitas configurações relacionadas a padrões de projeto que podem ajudar no desenvolvimento coletivo em empresas, por exemplo. Eles ajudam na padronização de diversos padrões que podem ser diferentes para cada desenvolvedor, como identação.
    * ESLint - módulo que analisa um código de forma estática e rápida para encontrar problemas. Oferece também correções autmáticas. É customizável, ou seja, o programador pode customizar o ESLint para se adequar aos seus padrões.
    * Prettier - é um formatador de códigos opinativo que garante que o código obedeça um padrão.
    * EditorConfig - ajuda a manter estilos de código, corrigindo automáticamente o código.