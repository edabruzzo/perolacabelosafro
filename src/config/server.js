const express = require('express')
const PORT = process.env.PORT || 5000
const rotas = require('../app/rotas/rotas.js');

require('marko/node-require').install();
require('marko/express');




module.exports = function(){


	var app = express();
	rotas(app);
  		
  	app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


	return app;


}
