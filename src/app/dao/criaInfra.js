const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
console.log(`DATABASE_URL -> ${connectionString}`)
const pool = new Pool({
  connectionString: connectionString,
  //https://stackoverflow.com/questions/54302088/how-to-fix-error-the-server-does-not-support-ssl-connections-when-trying-to-a
	ssl: false
});


//const pool = require('../../config/conexao_bancodados.js');
var fs = require("fs");
const tableName = 'clientes';

//https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
// Asynchronous read
fs.readFile('../../config/criaBasedados.sql', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
 //Synchronous read
const scriptCriarBaseDados = fs.readFileSync('../../config/criaBasedados.sql').toString();
//https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm



async function criaTabelas(){

    const client = await pool.connect()

        .catch(err => {
            console.log("ERRO NA CONEXÃO DURANTE A CRIAÇÃO DO POOL -> pool .connect ->", err);
        });

// Check that the pg client is valid
if (client !== undefined) {


    await client.query(`DROP TABLE IF EXISTS ${tableName};`, (err, res) => {
      // client is ready for the query() API call
      console.log("client ready:", client.readyForQuery, "n");

      // check for errors with client.query()
      if (err) {
        console.log("DROP TABLE ->", err);
      }
      if (res) {
        console.log("DROP TABLE result:", res);
      }
    });



    await client.query(scriptCriarBaseDados, (err, res) => {
      // check for errors with client.query()
      if (err) {
        console.log("CREATE TABLE ->", err);
      }
      if (res) {
        console.log("CREATE TABLE result:", res);
      }

      // Release the pg client instance after last query
      client.release();
      console.log("Client is released");
    });
  }
}

criaTabelas();