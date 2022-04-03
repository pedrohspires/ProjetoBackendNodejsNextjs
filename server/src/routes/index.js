import { Router } from 'express';
import { getAll } from '../controllers/usuarioController';

// Cria um novo objeto do tipo Router, que armazena todas as rotas criadas e que deverão
// ser utilizadas pelo servidor.
const routes = new Router();

// A primeira rota é a rota raiz (/)
routes.get('/', (req, res) => {
    res.status(200).json({ ok: 'connected' });
});

// Rota que retorna todos os usuários na base de dados
routes.get('/usuario', getAll);

// Exporta todas as rotas criadas dentro deste arquivo, na classe Routes() do express.
export default routes;
