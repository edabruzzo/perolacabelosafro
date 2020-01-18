
const { Pool } = require('pg');



module.exports = function(){


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

return pool;

}
