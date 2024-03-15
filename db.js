const mongoose = require ('mongoose');
const mongoURL = 'mongodb+srv://abhishekdesale5:Abhishek@cluster0.80qsv.mongodb.net'

mongoose.connect('mongodb+srv://abhishekdesale5:Abhishek@cluster0.80qsv.mongodb.net')
.then(()=> console.log('Mongodb is connected'))
.catch((e)=> console.log(e))

//Mongose maintain default connection object to represent mongodb connection
const db = mongoose.connection;
// connection establishedment using event listner
db.on( 'connected',async ()=>{
    console.log("Mongo is connected");
    const admin = db.db.admin();
    console.log(await admin.listDatabases());
});
db.on('error',(err)=>{
    console.log("Mongodb connection error", err);
});
db.on('disconnected',()=>{
    console.log("Mongodb is disconnected");
});

//exports the database connection
module.exports =db;