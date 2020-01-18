var app = require('./src/config/server.js')();

var conexao = require('./sr/config/conexao_bancodados.js')();

//https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
