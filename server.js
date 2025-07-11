const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;


app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/css/normalize.css',(request,response)=>{
    response.sendFile(__dirname + '/css/normalize.css')
})
app.get('/css/style.css',(request,response)=>{
    response.sendFile(__dirname + '/css/style.css')
})
app.get('/js/main.js',(request,response)=>{
    response.sendFile(__dirname + '/js/main.js')
})








app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
