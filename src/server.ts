
import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json());
app.set('view engine', 'html');

route.get('/', (req: Request, res: Response) => {
  
    res.render('../views/index.html');

  //res.json('../views');
})

app.use(route)


app.listen(3333, () => 'server running on port 3333')



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

