//https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/

const uuid = require('uuid/v4');
const sessao = require('express-session');

//https://scotch.io/tutorials/easy-node-authentication-facebook
var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
const appID = process.env.FACEBOOK_PEROLATRANCAS_APP_ID;
const appSecret = process.env.FACEBOOK_PEROLATRANCAS_APP_SECRET;



const usuarioDAO = require('../app/dao/usuarioDAO');


module.exports = (app, passport) => {

    //configuração da sessão e da autenticação.
    passport.use(new LocalStrategy(

        {
            usernameField:'email',
            passwordField:'senha'


        },

        (email, senha, done)=>{
           var usuario =  usuarioDAO.autentica(email, senha);

           if(!usuario || usuario.senha != senha)
                return done(null, false, { mensagem: 'Login e senha incorretos!' });
            else
                return done(null, usuario);
           
        }
        
        ));


	passport.serializeUser((usuario, done) => {
		const usuarioSessao = {
			nome: usuario.nome,
			email: usuario.email
		};
	
		done(null, usuarioSessao);
	});
	
	passport.deserializeUser((usuarioSessao, done) => {
		done(null, usuarioSessao);
	});

	app.use(sessao({
		secret: 'perolatrancas',
		genid: function(req) {
			return uuid();
		},
		resave: false,
		saveUninitialized: false
	}));



	app.use(function (req, resp, next) {
		req.passport = passport;
		next();
	});


/*
//https://scotch.io/tutorials/easy-node-authentication-facebook
//https://github.com/scotch-io/easy-node-authentication/tree/facebook
    passport.use(new FacebookStrategy({
        //https://developers.facebook.com/apps/2593299147565457/settings/basic/
        clientID: appID,
        clientSecret: appSecret ,
        callbackURL: "http://localhost:5000/auth/facebook/callback"
      },function(token, tokenSecret, profile, done) {
        done(null, profile);
      }
    ));
*/

};
    