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

    app.get('/clientes', function(req, resp) {
        resp.send('../views/clientes/lista.marko');
    });

}
