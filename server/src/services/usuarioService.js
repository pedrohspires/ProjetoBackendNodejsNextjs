import { getAll } from '../models/usuarioModel';

// Recebe a requisição do controller para ler os dados na base de dados
// e repassa a tarefa para o model, que realizará a conexão e a consulta
// no MongoDB
const todos = async () => {
    const users = await getAll();
    return users;
};

// Método inicialmente criado para burlar o ESLint
const login = async () => null;

// Exportação dos métodos
export { todos, login };
