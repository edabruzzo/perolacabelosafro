var conexao = require('../../config/conexao_bancodados.js')();


module.exports = (app) => {



    app.get('/', function (req, resp) {
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


        const clientesDAO = new clientesDAO(conexao);


        try {
            clientesDAO.listaClientes()
                .then(clientes =>
                    resp.marko(

                        require('../views/clientes/lista.marko'),
                        {
                            clientes: resultado
                        }

                    ));

        } catch (err) {
            console.error(err);
            resp.send("Error " + err);
        }

    });

}