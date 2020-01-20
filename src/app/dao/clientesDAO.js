/*
*/
//const client = require('../../config/conexao_bancodados.js')();


const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;
console.log(`DATABASE_URL -> ${connectionString}`)
const client = new Pool({
    connectionString: connectionString,
    //https://stackoverflow.com/questions/54302088/how-to-fix-error-the-server-does-not-support-ssl-connections-when-trying-to-a
    ssl: false
  });


exports.list = function(req, res) {
    client.query("SELECT * FROM cliente", function(err, result) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.render("clientes/lista", { title: "Lista de Clientes", dados: result.rows });
              
    });
  };


  exports.add = function(req, res) {
    res.render("clientes/adiciona", { title: "Adiciona Cliente" });
    
  };


  exports.edit = function(req, res) {
    // get the Postgres record ID from the request 'params' body
    var id = req.params.id;
  
    client.query("SELECT * FROM cliente WHERE id=$1", [id], function(
      err,
      result
    ) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.render("clientes/edita", { title: "Edita Cliente", dados: result.rows });
      
    });
  };


  exports.save = function(req, res) {
    var cols = [req.body.name, req.body.address, req.body.email, req.body.phone];
  
    client.query(
      
"INSERT INTO cliente(nome, idade,whatsapp, facebook, instagram, CPF, data_cadastro, endereco, situacao_regular, email)"+
" VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * ;",

      cols,
      function(err, result) {
        if (err) {
          console.log("Error. Not Saved! : %s ", err);
        }
        res.redirect("/cliente");
        
      }
    );
  };




  exports.update = function(req, res) {
    // Postgres table column names go here
    var cols = [
      req.body.nome,
      req.body.idade,
      req.body.whatsapp,
      req.body.facebook,
      req.body.instagram,
      req.body.CPF,
      req.data_cadastro,
      req.endereco,
      req.situacao_regular,
      req.email,
      req.params.id
    ];

    

    client.query(
      "UPDATE cliente SET nome= $1, idade= $2,whatsapp=$3, facebook=$4, instagram=$5, "+
      "CPF=$6, data_cadastro=$7, endereco=$8, situacao_regular=$9, email=$10 WHERE id=$11",
      cols,
      function(err, result) {
        if (err) {
          console.log("Error. Updating : %s ", err);
        }
        res.redirect("/cliente");
        
      }
    );
  };



  exports.delete = function(req, res) {

    var id = req.params.id;
  
    client.query("DELETE FROM cliente WHERE id=$1", [id], function(err, rows) {
      if (err) {
        console.log("Error deleting : %s ", err);
      }
      res.redirect("/cliente");
      
    });
  };