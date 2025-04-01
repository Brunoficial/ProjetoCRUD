import mysql from 'mysql'
import util from 'util'

const dbConfig = {
    host: 'localhost',
    user: process.env.USER_DB || 'root', 
    password : process.env.PASSWORD_DB || 'root',
    database: "projeto-crud"
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar-se com o Banco de Dados:', err);
        process.exit(1);
    }
    console.log('Conexão realizada com êxito!');
})

connection.query = util.promisify(connection.query).bind(connection);

export default connection;