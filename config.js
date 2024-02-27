const { hash } = require("bcryptjs")
const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb+srv://erzhankabdolla04:161291_Era@cluster0.k3qmkpt.mongodb.net/?retryWrites=true&w=majority")



connect.then(()=>{
    console.log("Db is Ok")
})
.catch(()=>{
    console.log("Db is not ok")
})

const cars =  mongoose.Schema({
    img:{
        type: String,
        required: false
    },
    img2:{
        type: String,
        required: false
    },
    img3:{
        type: String,
        required: false
    },
    Model: {
        type: String,
        required: true
    },
    Make: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    Engine_position: {
        type: String,
        required: false
    },
    Power: {
        type: String,
        required: true
    },
    Drive: {
        type: String,
        required: true
    },
    Transmission:{
         type: String,
        required: true
    },
    weight:{
        type: String,
        required: false
    },
    country:{
        type: String,
        required: false
    },
    body:{
        type: String,
        required: false
    },
    configuration:{
        type: String,
        require:true
    },
    seats:{
        type: String,
        required: false
    },
    fuel_cap: {
        type: String,
        required: false
    },
    trim:{
        type: String,
        required: false
    },
    cost: {
        type: String,
        required: true
    },
    description_in_en: {
        type: String,
        required: true
    },
    description_in_rus: {
        type: String,
        required: true
    }

});


const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    deletionDate:{
        type: String,
        default: null,
    },
    updateDate:{
        type: String,
        default: null,
    },
    creationDate:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }, 
    isAdmin:{
        type: Boolean,
        default: false,
        required: true
    }
})

const ordersSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car', 
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    orderDate: {
        type: String,
        default: null
    },
    returnDate: {
        type: String,
        default: null
    },
    deliveryAddress: {
        type: String,
        required: true
    }
});


const Cars = new mongoose.model('Cars', cars);
const collection = new mongoose.model("users",LoginSchema);
const Order = new mongoose.model("Orders",ordersSchema);


module.exports = { collection, Cars , Order};