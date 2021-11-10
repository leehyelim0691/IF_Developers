const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const fs = require('fs');
const port = 3002;

app.use(cors());
app.use('/api',api);
app.use('/api/upload',api);
app.use('/api/read',api);
app.use('/api/select', api);
app.use(express.json());

app.post('/api/upload',(req,res)=>{
  console.log(req.body);
  const data = JSON.stringify(req.body,null,4);
  const fileName = req.body.fileName;
  fs.writeFileSync("./server/json/"+fileName+".json",data);
  const fileList = fs.readdirSync('./server/json/');
  res.send({body:req.body,fileList:fileList});
  //res.send(req.body);
});

app.post('/api/select', (req, res) => {
  console.log("server req body: " + req.body.fileIndex);
  const filelist = fs.readdirSync("./server/json");
  console.log("server req file: " + filelist[req.body.fileIndex]);
  res.send(fs.readFileSync('./server/json/' + filelist[req.body.fileIndex], 'utf-8'));
});

// const file = fs.readFileSync('./server/json/f.json','utf-8');
// console.log(file);

// app.post('/api/read',(req,res)=>{
//   res.send(file);
// });


app.listen(port,()=>console.log(`Listening on port ${port}`));

