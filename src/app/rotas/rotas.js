var clientesDAO = require('../dao/clientesDAO.js');


module.exports = (app) => {

//app.get('/', routes.index)
app.get('/cliente', clientesDAO.list)
app.get('/cliente/adiciona', clientesDAO.add)
app.get('/cliente/deleta/:id', clientesDAO.delete)
app.get('/cliente/edita/:id', clientesDAO.edit)
app.post('/cliente/adiciona', clientesDAO.save)
app.post('/cliente/edita/:id', clientesDAO.update)



}