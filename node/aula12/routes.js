const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeControllers');
const contatsController = require('./src/controllers/contactsControllers');

//Rotas da home
route.get('/', homeController.homePage);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contatos', contatsController.contacts);
route.post('/contatos', contatsController.sendContacts);

module.exports = route;