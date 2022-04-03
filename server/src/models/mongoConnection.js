const { MongoClient } = require('mongodb');

// Configurações do MongoDB
const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'aulas';

// Método que realiza a conexão com o MongoDB
const connection = () => MongoClient
    .connect(MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

module.exports = connection;
