var clientesDAO = require('../dao/clientesDAO.js');
const { check, validationResult } = require('express-validator/check');
const Cliente = require('../model/cliente.js');
var cliente = new Cliente();


module.exports = (app, passport) => {

//app.get('/', routes.index)
app.get('/cliente', clientesDAO.list)
//app.get('/cliente/adiciona', Cliente.validacoes(), clientesDAO.add)
app.get('/cliente/deleta/:id', clientesDAO.delete)
app.get('/cliente/edita/:id', clientesDAO.edit)
app.post('/cliente/adiciona', clientesDAO.save)
app.post('/cliente/edita/:id', Cliente.validacoes(), clientesDAO.update)
app.get('/cliente/adicionaFulano', clientesDAO.adicionaFulano)


app.get('/login', function(req, res) {

    res.render('login.ejs',);
});

app.post('/login', passport.authenticate('local', {
    successRedirect : '/cliente', // redireciona para a tela de clientes
    failureRedirect : '/login' // redirect back to the signup page if there is an error
}));

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/cliente',
                                      failureRedirect: '/login' }));


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

// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});



}