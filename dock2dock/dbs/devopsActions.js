const pools = require("./pgcon");

async function insertInto(statement, arr_data) {
    let response = undefined;
    let rows = undefined;
    try {
        response = await pools.poolDockPg.query(
            // `INSERT INTO driver_jasper.list_customer2 (customerid, namecustomer, bolson) VALUES ($1, $2, $3)`,
            statement,
            arr_data
        );
        console.log(`Files affected: `, response.rowCount);
        return true;
    } catch (error) {
        console.error(error);
        return { error };
    }
}


async function execQuery(statement) {
    try {
        response = await pools.poolDockPg.query(
            statement
        );
        if (response?.rows) {
            if (response.rows.length > 0) {
                return response.rows;
            }
        }
    } catch (error) {
        return false;
    }
    return false;
}

async function execDDl(createTableQuery) {
    let response = undefined;
    let error = undefined;

    try {
        response = await pools.poolDockPg.query(createTableQuery);
        return true;
    } catch (err) {
        error = err;
        console.error(error);
        return { error };
    }
}



module.exports = {
    insertInto,
    execQuery,
    execDDl
};