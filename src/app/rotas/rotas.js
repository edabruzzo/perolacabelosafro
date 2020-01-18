module.exports = (app) => {

    app.get('/', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> PÉROLA TRANÇAS </h1>
                    </body> 
                </html>
            `
        );
    });

    app.get('/trancas', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Listagem de tipos de tranças </h1>
                    </body> 
                </html>
            `
        );
    });

}
