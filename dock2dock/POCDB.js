const db = require('./dbs/devopsActions');


async function createTable() {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS my_table (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`;

    const result = await db.execDDl(createTableQuery);

    if (result.error) {
        console.error('Error al crear la tabla:', result.error);
    } else {
        console.log('Tabla creada exitosamente');
    }
}



module.exports = { createTable };