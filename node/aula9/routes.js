const express = require('express');
const route = express.Router(); //importanto o Router
const homeController = require('./controllers/homeControllers'); //importando o arquivo home controllers
const contatsController = require('./controllers/contactsControllers');//importando o arquivo contactsController

//Rotas da home
route.get('/', homeController.homePage);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contatos', contatsController.contacts);
route.post('/contatos', contatsController.sendContacts);

module.exports = route;