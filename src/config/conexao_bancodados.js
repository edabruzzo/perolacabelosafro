/*
 *
https://devcenter.heroku.com/articles/heroku-postgresql#local-setup
https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
https://kb.objectrocket.com/postgresql/nodejs-and-postgresql-crud-example-application-part-1-972
https://kb.objectrocket.com/postgresql/nodejs-and-postgresql-crud-example-application-part-2-973
https://kb.objectrocket.com/postgresql/nodejs-and-postgresql-crud-example-application-part-3-974

importante referencia ! 
adicionar no futuro Sequelize
Better manage the database layer by adding an ORM - like Sequelize (check out my follow-up post on Node, Postgres, and Sequelize) - and a means of managing migrations
https://mherman.org/blog/postgresql-and-nodejs/
http://mherman.org/blog/2015/10/22/node-postgres-sequelize/#.Vi7efBNViko

https://www.rithmschool.com/courses/node-express-fundamentals/express-postgres-crud-noe
https://blog.pagesd.info/2019/10/15/crud-with-express-postgresql-10-steps/

https://www.tgmarinho.com/continuando-api-do-gobarber/

https://medium.com/@kris101/building-appointment-scheduler-app-in-react-and-nodejs-d01f7294a9fd
*/


const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;


module.exports = function(){

  console.log(`DATABASE_URL -> ${connectionString}`)
  const pool = new Pool({
    connectionString: connectionString,
    //https://stackoverflow.com/questions/54302088/how-to-fix-error-the-server-does-not-support-ssl-connections-when-trying-to-a
    ssl: false
  });
  
return pool;

}