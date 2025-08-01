const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 8000;
const connectString = process.env.connectString
const MongoClient = require('mongodb').MongoClient
let db = null

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())




//after db connection returning main index
app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/businessList',(request,response)=>{
    db.collection('1')
        .find()
        .toArray()
        .then(results =>{
            response.render('index.ejs',{businesses: results})
        })
    
        
    
})
app.post('/addBusiness',(request,response)=>{
    db.collection('1').insertOne({
        'Business Name': request.body._businessName,
        'Business Phone': request.body._businessPhone,
        'Business Address': request.body._businessAddress
    })
    .then(result =>{
        console.log(request.body)
        response.redirect('/businessList')
    })
    .catch(error => console.error(error))
})




//connect to db and start app
MongoClient.connect(connectString)
    //after db connection
    .then( client =>{
        console.log('connected to mongodb')
        db = client.db('LeadLis')
        
        app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(error=>{
        console.error(error)
    })














