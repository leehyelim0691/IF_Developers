var express = require('express');
var router = express.Router();
const axios = require('axios');
const { application } = require('express');
const fs = require('fs');


router.get('/',function(req,res){
});

router.get('/upload',function(req,res){
});

const file = fs.readdirSync('./server/json/','utf-8');
//console.log(file);

router.get('/read',function(req,res){
  res.send(file);
});

router.get('/select',function(req,res){
});


module.exports = router;