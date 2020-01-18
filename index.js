var app = require('./src/config/server.js')();

var conexao = require('./src/config/conexao_bancodados.js')();

//https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
app.get('/db', async (req, res) => {
    try {
      const client = await conexao.connect()
      const result = await client.query('SELECT now() limit 1');
	    
      const results = { 'results': (result) ? result.rows : null};
      //res.render('pages/db', results );
      console.log(results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
