const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginReque } = require('./src/middlewares/middleware');


route.get('/', homeController.index);

route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);


route.get('/contato/index', loginReque, contatoController.index);
route.post('/contato/register', loginReque, contatoController.register);
route.get('/contato/index/:id', loginReque, contatoController.editIndex);
route.post('/contato/edit/:id', loginReque, contatoController.edit);

route.get('/contato/delete/:id', loginReque, contatoController.delete);



module.exports = route;