//const cool = require('cool-ascii-faces')
const express = require('express')
//const path = require('path')
const PORT = process.env.PORT || 5000

const rotas = require('../app/rotas/rotas.js');

module.exports = function(){


	var app = express();
	rotas(app);
  		
  	app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


	return app;


}
