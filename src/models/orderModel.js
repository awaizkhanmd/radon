const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    userId:{type: ObjectID,ref: "User"},
    productId:{type:ObjectID,ref:"Product"},
    amount: {type: Number, default:0},
    isFreeAppUser: Boolean,
	date: {type: Date,
        default:Date.now()
    }

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)