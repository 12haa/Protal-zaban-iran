// import { MongoClient } from "mongodb";

// const uri = "mongodb+srv://12haa4:wLeGd845@cluster0.lipnp0r.mongodb.net/"; // Replace with your MongoDB connection string
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// let cachedDb = null;

// async function connectToDatabase() {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   try {
//     await client.connect();
//     const db = client.db("test"); // Replace with your database name
//     cachedDb = db;
//     return db;
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// }

// export default connectToDatabase;
