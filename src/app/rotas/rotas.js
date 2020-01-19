var conexao = require('../../config/conexao_bancodados.js')();


module.exports = (app) => {



    app.get('/', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> PÉROLA CABELOS AFRO </h1>
                    </body> 
                </html>
            `
        );
    });

    //https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
    app.get('/clientes', async (req, resp) => {

    try {
      const client = await conexao.connect()
      const resultado = await client.query('SELECT * FROM clientes;');
	//  const resultados = { 'results': (resultado) ? resultado.rows : null};
        resp.marko(
            
            require('../views/clientes/lista.marko'), 
       {
            clientes : resultados
    }   
            
            );

      console.log(resultados);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  });

}