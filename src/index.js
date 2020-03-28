const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / recurso
 */

/**
 * Get - buscar informações do backend
 * Post - criar uma informação do backend
 * Put - alterar um informação do backend
 * Delete - deletar uma informação do backend
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros para identificar recursos
 * Request Body: corpo da requisição, utilizados para criar ou alterar recursos
 */

/**
 * SQL: mysql, sqllite, postgresql, oracle, microsoft sql server
 * NoSQL: mongoDB, couchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()  - esse é uma abordagem js, em caso de mudança de banco não irá afetar
 */



app.listen(3333);