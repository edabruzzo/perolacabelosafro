var clientesDAO = require('../dao/clientesDAO.js');
const { check, validationResult } = require('express-validator/check');
const Cliente = require('../model/cliente.js');
var cliente = new Cliente();
const ControladorBase = require('../controladores/baseControlador.js');
const baseControlador = new ControladorBase();

module.exports = (app) => {

//app.get('/', routes.index)
app.get('/cliente', clientesDAO.list)
app.get('/cliente/adiciona', Cliente.validacoes(), clientesDAO.add)
app.get('/cliente/deleta/:id', clientesDAO.delete)
app.get('/cliente/edita/:id', clientesDAO.edit)
app.post('/cliente/adiciona', clientesDAO.save)
app.post('/cliente/edita/:id', Cliente.validacoes(), clientesDAO.update)
app.get('/cliente/adicionaFulana', clientesDAO.adicionaFulana)


app.route('/login')
    .get(baseControlador.login())
    .post(baseControlador.efetuaLogin());


/*

[
    // username must be an email
    check('username').isEmail().withMessage('O nome de usuário deve ser um e-mail válido'),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 }).withMessage('A senha deve ter no mínimo 5 caracteres')
  ], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  
    User.create({
      username: req.body.username,
      password: req.body.password
    }).then(user => res.json(user))
      .catch(erro => console.log(erro));
        
  });




*/




}