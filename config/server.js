//Importar os módulos 
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//Iniciando o objeto Express
var app = express();

//Configurando EJS como engine de views
//Setando as variaveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Configuração dos Middlewares
app.use(express.static('app/public')); // express.static
app.use(bodyParser.urlencoded({extended : true})); //body-parser
app.use(expressValidator()); //Express-validator

//Configuração do Consign para carregamento automático de routes, views, controllers
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//Exportando app
module.exports = app;