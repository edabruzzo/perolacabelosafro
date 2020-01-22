

class ControladorBase{


    login() { return function(req, res) {
        //mostra a página de login
        res.render(login);
        
      }
    }
    

    efetuaLogin() {

        return function(req, resp) {


        }
    }




}

module.exports = ControladorBase;