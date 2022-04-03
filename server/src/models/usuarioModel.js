import connection from './mongoConnection';

// Recebe a requisição do service do usuário para realizar a consulta no MongoDB.
const getAll = async () => {
    const db = await connection(); // Realiza a conexão com o MongoDB
    return db.collection('usuarios').find().toArray(); // Retorna o reultado da consulta
};

// Método inicialmente criado para burlar o ESLint
const login = async () => null;

// Exportaç]ap dos métodos
export { getAll, login };
