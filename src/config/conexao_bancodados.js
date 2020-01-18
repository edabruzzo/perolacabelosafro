/*
 *
 * https://devcenter.heroku.com/articles/heroku-postgresql#local-setup
 *  https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
*/
const { Pool } = require('pg');



module.exports = function(){


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  //https://stackoverflow.com/questions/54302088/how-to-fix-error-the-server-does-not-support-ssl-connections-when-trying-to-a
	ssl: false
});

return pool;

}
