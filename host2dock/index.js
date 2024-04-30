/**
 * Este index se ejecuta desde el host
 * La base esta dentro de un docker
 */

const express = require('express');
const {execQuery, insertInto} = require('./dbs/devopsActions');

const app = express();

app.get('/', async (req, res) => {
    console.log('Cargando data de usuarios');
    const resultSet = await execQuery('SELECT * FROM my_table');
    return res.send(resultSet);
})

app.listen(3000, () => console.log('U are listenting'));