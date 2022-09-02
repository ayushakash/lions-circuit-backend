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
    _id: String,                                //mongoose schema
    name: {
        type: String,
        required: true
    },
    
    address: [{
        _id: String,
        id: Number,
        address: String
    }],
    mobile: {
        type: String,
        required: true
    },

});

const customerData = mongoose.model("lions_data", CheckoutSchema);

module.exports = customerData;
