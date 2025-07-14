const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 8000;
const connectString = process.env.connectString
const MongoClient = require('mongodb').MongoClient
app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.json())


//connect to db
MongoClient.connect(connectString)
    //after db connection
    .then( client =>{
        console.log('connected to mongodb')
        const db = client.db('LeadLis')
        const businessCollection = db.collection('1')
        const businessArray = businessCollection.find().toArray()
            
            
        //after db connection returning main index
        app.get('/',(request,response)=>{
        response.sendFile(__dirname + '/index.html')
        })














        app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
        })
        
        

    })
    .catch(error=>{
        console.error(error)
    })






