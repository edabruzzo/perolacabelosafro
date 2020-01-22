
const client = require('../../config/conexao_bancodados')();


exports.autentica = function(email, senha) {
    client.query("SELECT * FROM usuario WHERE email=$1 AND senha=$2", function(err, result) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      return result;
              
    });
  };
