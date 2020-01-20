const express = require('express')
const PORT = process.env.PORT || 5000
const rotas = require('../app/rotas/rotas.js');
const bodyParser = require('body-parser');
const path = require('path');


//require('marko/node-require').install();
//require('marko/express');




module.exports = function(){


	var app = express();
	rotas(app);
	  
	// Set EJS engine as the default engine
	app.set('view engine', 'ejs');
	app.set('port', PORT);  

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(express.static(path.join(__dirname, 'public')))


	app.listen(app.settings.port, () => console.log(`Listening on ${ PORT }`))


	return app;


}
