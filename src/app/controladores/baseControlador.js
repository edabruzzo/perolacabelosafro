

class ControladorBase{


    login() { return function(req, res) {
        //mostra a página de login
        res.render('login');
        
      }
    }
    

    efetuaLogin() {

        return function(req, resp, next) {

            const passport = req.passport;

            passport.authenticate('local', (erro, usuario, info) => {

                if(info){
                    res.render('login');

                }

                if(erro){
                    return next(erro);
                }
                    
                else{
                    req.login(usuario, (erro)=>{
                        if(erro)
                            return next(erro);
                    
                    return resp.redirect('/cliente')
                    })

                }


            }) (req, resp, next);
    

        }
    }




}

module.exports = ControladorBase;