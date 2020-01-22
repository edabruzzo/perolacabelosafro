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





	app.listen(app.settings.port, () => console.log(`Listening on ${ PORT }`))


	return app;


}
