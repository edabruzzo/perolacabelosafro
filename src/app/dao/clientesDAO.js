
const client = require('../../config/conexao_bancodados')();

exports.list = function(req, res) {
    client.query("SELECT * FROM cliente", function(err, result) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.render("clientes/lista.ejs", { title: "Lista de Clientes", dados: result.rows });
              
    });
  };


  exports.add = function(req, res) {
    res.render("clientes/", { title: "Lista Clientes" });
    
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


    var cols = [req.body.nome, 
      req.body.dataNascimento, 
      req.body.whatsapp, 
      req.body.facebook,
      req.body.instagram,
      req.body.CPF,
      req.body.endereco,
      req.body.situacao,
      req.body.email
    ];
  
    client.query(
      
"INSERT INTO cliente(nome, dataNascimento,whatsapp, facebook, instagram, CPF, data_cadastro, endereco, situacao_regular, email)"+
" VALUES( $1, $2, $3, $4, $5, $6, now(), $7, $8, $9) RETURNING * ;",

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
      req.body.dataNascimento,
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


  var insereFulanoSQL = `INSERT INTO cliente
  (nome, dataNascimento,
    whatsapp, facebook,
    instagram,
    CPF,
    data_cadastro,
    endereco,
    situacao_regular,
    email)
  VALUES(
  'Fulano',
  '1984-03-09',
  '11 9999-9999',
  'facebook.com/fulano',
  'instagram.com/fulano',
  '999.999.999-99',
  now(),
  'R. Tal, n. tal - bairro tal, cidade tal',
  true,
  'fulano@gmail.com' );`


    var insereUsuariosCriaTabelaUsuario = `CREATE TABLE usuario
    (
      --id integer NOT NULL DEFAULT nextval('clientes_seq'::regclass),
      id_usuario SERIAL PRIMARY KEY,
      nome character varying(255) not null,
      email character varying(255) not null,
      senha character varying(10) not null,
      privilegioAdm boolean
    )
    WITH (
      OIDS=FALSE
    );
    ALTER TABLE usuario
      OWNER TO postgres;
    
    
    
    
    INSERT INTO usuario
    (nome, email, senha, privilegioAdm)
    VALUES(
    'Emmanuel',
    'emmanuel.oliveira3@gmail.com',
    '123',
    true),
    (
    'Pérola',
    'passeiodospoetas@gmail.com',
    '123',
    false);
    `



  exports.adicionaFulano = function(req, res){

    client.query(insereFulanoSQL, [], function(err, rows) {
      if (err) {
        console.log("Erro ao inserir o fulano: %s ", err);
      }
      res.redirect("/cliente");
      
    });



  }