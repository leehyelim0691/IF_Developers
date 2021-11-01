const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');
const port = 3002;

app.use(cors());
app.use('/api',api);
app.use('/api/upload',api);
app.use('/api/read',api);
app.use(express.json());

app.post('/api/upload',(req,res)=>{
  console.log(req.body);
  res.send(req.body);
  const data = JSON.stringify(req.body,null,4);
  const fileName = req.body.page_label;
  fs.writeFileSync("./server/json/"+fileName+".json",data);
});

const file = fs.readFileSync('./server/json/Form 1.json','utf-8');
console.log(file);

app.post('/api/read',(req,res)=>{
  res.send(file);
})


app.listen(port,()=>console.log(`Listening on port ${port}`));

