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
app.use(express.json());

app.post('/api/upload',(req,res)=>{
  console.log(req.body);
  res.send(req.body);
  const data = JSON.stringify(req.body);
  const fileName = req.body.page_label;
  fs.writeFileSync("./server/json/"+fileName+".josn",data);
});

app.listen(port,()=>console.log(`Listening on port ${port}`));

