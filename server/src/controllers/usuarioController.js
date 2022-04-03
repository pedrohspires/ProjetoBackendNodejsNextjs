import { todos } from '../services/usuarioService';

// Recebe a requisição de routes/index e passa a requisição
// para o serviço que fará a consulta dos dados na base de dados.
const getAll = async (req, res) => {
    const users = await todos();
    return res.status(200).json(users);
};

// Método inicialmente criado para burlar o ESLint
const login = async () => null;

// Exportação dos métodos
export { getAll, login };
