const express = require('express')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const path = require('path');
var passport = require('passport');
const sessaoAutenticacao = require('./sessao-autenticacao');
var rotas = require('../app/rotas/rotas');

//require('marko/node-require').install();
//require('marko/express');


module.exports = function () {


	var app = express();
	
	// Set EJS engine as the default engine
	app.set('view engine', 'ejs');
	app.set('port', PORT);

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(express.static(path.join(__dirname, 'public')))


//AUTENTICAÇÃO------------------------------------------------------------------------

	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions




//-----------------------------------------------------------------------------
rotas(app, passport);
sessaoAutenticacao(app, passport);





	// Error Handler ===============================================================
	// middleware that logs the error
	app.use((err, req, res, next) => {
		console.error(err)
		next(err)
	})

	// middleware that responds to the 500 error
	// The 500 error is associated with a requesting a file that does not exist
	app.use((err, req, res, next) => {
		res.status(500).send("Internal server error.")
	})

	// middleware that responds to the 404 error
	// The 404 error is associated with a GET request failure
	app.use((req, resp) => {
		resp.status(404).send("Page not found!")
	})





	app.listen(app.settings.port, () => console.log(`Listening on ${PORT}`))


	return app;


}
