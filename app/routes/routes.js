var express = require('express');
module.exports = function (route)  {
    route.get('/', function (req, res) {
        route.app.controller.controllerSite.index(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
    route.get('/index', function (req, res) {
        route.app.controller.controllerSite.index(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
    route.get('/obras', function (req, res) {
        route.app.controller.controllerSite.obras(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
    route.get('/adaptacoes', function (req, res) {
        route.app.controller.controllerSite.adaptacoes(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
    route.get('/perguntas', function (req, res) {
        route.app.controller.controllerSite.perguntas(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
    route.post('/ibmWatson', function (req, res) {
        route.app.controller.controllerSite.ibmWatson(route, req, res);
        //route acessa o app, o app o controller que enfim acessa chatbot que renderiza index;
    });
}