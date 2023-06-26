const {Client} = require("pg");
const client = new Client({
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
    port: 5432,
});



//create table
const createTable = (tableName) => {
    client.connect()
        .then(() => console.log("connected successfully"))
        .then(() => client.query(`create table ${tableName} (id serial primary key, name varchar(50), age int)`))
        .then(() => console.log("table created successfully"))
        .catch(e => console.log(e))
        .finally(() => client.end());
}






//insert data
const insertData = (tableName, name, age) => {
    client.connect()
        .then(() => console.log("connected successfully"))
        .then(() => client.query(`insert into ${tableName} (name, age) values ('${name}', ${age})`))
        .then(() => console.log("data inserted successfully"))
        .catch(e => console.log(e))
        .finally(() => client.end());
}


//remove data
const removeData = (tableName, id) => {
    client.connect()
        .then(() => console.log("connected successfully"))
        .then(() => client.query(`delete from ${tableName} where id = ${id}`))
        .then(() => console.log("data deleted successfully"))
        .catch(e => console.log(e))
        .finally(() => client.end());
}


//update data
const updateData = (tableName, id, name, age) => {
    client.connect()
        .then(() => console.log("connected successfully"))
        .then(() => client.query(`update ${tableName} set name = '${name}', age = ${age} where id = ${id}`))
        .then(() => console.log("data updated successfully"))
        .catch(e => console.log(e))
        .finally(() => client.end());
}


