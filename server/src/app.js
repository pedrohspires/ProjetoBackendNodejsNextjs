import express from 'express';
import routes from './routes/index';

/**
 * Cria a estrutura básica do servidor com a utilização de classes
 * para facilitar a organização do código.
 */
class App {
    // Faz as configurações iniciais do servidor
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    // Informa para o servidor que deve ser utilziado JSON
    middlewares() {
        this.server.use(express.json());
    }

    // Informa para o servidor (express) que deve ser utilizado o arquivo o
    // módulo do arquivo src/routes.js para configurar as rotas.
    routes() {
        this.server.use(routes);
    }
}

// Exporta apenas o atributo "server" da classe já configurado.
export default new App().server;
