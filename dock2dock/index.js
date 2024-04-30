/**
 * Este index se ejecuta desde un docker
 * La base esta dentro de otro docker
 */

const express = require('express');
const { execQuery, insertInto } = require('./dbs/devopsActions');
const { createTable } = require('./POCDB');

const app = express();

(async () => {
    try {
        console.log('Hola maldito mierda mundo!!!');
        await createTable()
    } catch (error) {
        console.log(error);
    }
})()

app.get('/', async (req, res) => {
    console.log('Cargando data de usuarios');
    const resultSet = await execQuery('SELECT * FROM my_table');
    return res.send(resultSet);
})

app.get('/write', async (req, res) => {
    console.log('Creando usuario');
    const currentUnixTimestamp = Math.floor(Date.now() / 1000);
    let result = await insertInto(
        'INSERT INTO my_table (name, email) VALUES ($1, $2)',
        [`${currentUnixTimestamp}`, `${currentUnixTimestamp}@mail.com`]
    );
    return res.send({ result })
})

app.listen(3000, () => console.log('U are listenting'));