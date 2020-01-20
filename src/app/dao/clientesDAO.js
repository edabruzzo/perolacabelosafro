
const conexao = require('../../config/conexao_bancodados.js');

exports.list = function(req, res) {
    conexao.query("SELECT * FROM employee", function(err, result) {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.render("employee/list", { title: "Employee", data: result.rows });
    });
  };