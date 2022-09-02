const express = require ('express');
const customerData = require('./database.js')
const { v4: uuid } = require('uuid');


const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());




app.post('/store',async(req,res)=>{
    console.log("Request body: ", req.body)

    let data = req.body
    data["_id"] = uuid()

    const lions_data = new customerData(req.body);
    

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