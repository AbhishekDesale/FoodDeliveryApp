const mongoose = require ('mongoose');
const mongoURL = 'mongodb+srv://abhishekdesale5:Abhishek@cluster0.80qsv.mongodb.net'

mongoose.connect('mongodb+srv://abhishekdesale5:Abhishek@cluster0.80qsv.mongodb.net/FoodDelivery')
.then(()=> console.log('Mongodb is connected'))
.catch((e)=> console.log(e))

//Mongose maintain default connection object to represent mongodb connection
const db = mongoose.connection;
// connection establishedment using event listner
db.on( 'connected', ()=>{
    console.log("Mongo is connected");
});
db.on('error',(err)=>{
    console.log("Mongodb connection error", err);
});
db.on('disconnected',()=>{
    console.log("Mongodb is disconnected");
});

//exports the database connection
module.exports =db;