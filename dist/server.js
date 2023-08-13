"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
const route = (0, express_2.Router)();
app.use(express_1.default.json());
app.set('view engine', 'scss');
route.get('/', (req, res) => {
    res.render('../views/index.html');
    //res.json('../views/index.html');
});
app.use(route);
app.listen(3333, () => 'server running on port 3333');
/*
var express = require('express');
var app = express();

app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', function(req,res){


    res.render('../views/index.html');


});

app.listen(3333, function(){

    console.log('Executando na porta 3333');

});

*/
