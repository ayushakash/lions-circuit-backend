const mongoose = require("mongoose");

mongoose
    .connect(
        'mongodb+srv://chardeevari:chardeevari%40mongo@cluster0.rfwfs.mongodb.net/?retr' +
                'yWrites=true&w=majority',

        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('mongo connected sucessfuly'))
    .catch((err) => console.log(err))

const CheckoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    address: {
        type : Array , "default" : [] 
    },
    mobile: {
        type: String,
        required: true
    },

});

const customerData = mongoose.model("lions_data", CheckoutSchema); ////////collection name will be users

module.exports = customerData;
