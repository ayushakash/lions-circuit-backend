const express = require ('express');
const customerData = require('./database.js')


const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());



app.post('/store',async(req,res)=>{

    const lions_data= new customerData(req.body);
    console.log(lions_data);
    
    try {
        
        await lions_data.save();       
        console.log('user saved sucessfully');
        
    } catch (error) {
        res.status(400)
        res.send('Not updated');
    }


})


app.listen('4000',
    console.log('app running on port 4000')
)