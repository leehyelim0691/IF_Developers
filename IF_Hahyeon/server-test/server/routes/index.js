var express = require('express');
var router = express.Router();
const axios = require('axios');
const { application } = require('express');
const fs = require("fs");

router.get('/',function(req,res){
  res.send(req.body);
});

router.get('/upload',function(req,res){
  
});

module.exports = router;