/*
 *
https://devcenter.heroku.com/articles/heroku-postgresql#local-setup
https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
https://kb.objectrocket.com/postgresql/nodejs-and-postgresql-crud-example-application-part-1-972
https://kb.objectrocket.com/postgresql/nodejs-and-postgresql-crud-example-application-part-2-973
https://kb.objectrocket.com/postgresql/nodejs-and-postgresql-crud-example-application-part-3-974

*/


const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;


module.exports = function(){

  console.log(`DATABASE_URL -> ${connectionString}`)
  const client = new Pool({
    connectionString: connectionString,
    //https://stackoverflow.com/questions/54302088/how-to-fix-error-the-server-does-not-support-ssl-connections-when-trying-to-a
    ssl: false
  });
  
return pool;

}