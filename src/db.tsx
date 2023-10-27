// const { MongoClient } = require("mongodb");

// let dbConnection
// module.exports = {
//     connectToDb :(cb)=>{
//         MongoClient.connect(
//           "mongodb+srv://12haa4:wLeGd845@cluster0.lipnp0r.mongodb.net/"
//         ).then((client)=>{
//             dbConnection = client.db()
//             return cb()
//         }).catch(err=>{
//             console.log(err)
//             return cb(err)
//         })
//     },
//     getDb :()=>dbConnection;
// }