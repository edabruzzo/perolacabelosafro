//https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/

const uuid = require('uuid/v4');
const sessao = require('express-session');

//https://scotch.io/tutorials/easy-node-authentication-facebook
const passport = require('passport'); 
var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

const usuarioDAO = require('../app/dao/usuarioDAO');


module.exports = (app) => {

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


	app.use(passport.initialize());
	app.use(passport.session());



	app.use(function (req, resp, next) {
		req.passport = passport;
		next();
	});




//https://scotch.io/tutorials/easy-node-authentication-facebook
    passport.use(new FacebookStrategy({
        //https://developers.facebook.com/apps/2593299147565457/settings/basic/
        clientID: process.env.FACEBOOK_PEROLATRANCAS_APP_ID,
        clientSecret: process.env.FACEBOOK_PEROLATRANCAS_APP_SECRET,
        callbackURL: "http://localhost:5000/auth/facebook/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ 'facebook.id' : profile.id }, function(err, user) {
          if (err) { return done(err); 
        }else{
                
            /*
            // if there is no user found with that facebook id, create them
                var newUser            = new User();

                // set all of the facebook information in our user model
                newUser.facebook.id    = profile.id; // set the users facebook id                   
                newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
                newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
            */


                done(null, user);

        }
        });
      }
    ));


};
    