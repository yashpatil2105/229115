const { response } = require('express');
const express = require('express');
const app = express();
var path = require('path')
app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname,'index.html'))
    // resp.send('IACSD \n Address : near dypims akurdi')
})

app.listen(3500,function(req,resp){
  console.log("Server running on 3500")
})