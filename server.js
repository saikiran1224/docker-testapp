/* For Express */
const express = require("express");
const app = express();

/* For MongoDB */
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;

/* Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

/* MongoDB Connection */
const MONGO_URL = "mongodb://admin:qwerty@localhost:27017";
const client = new MongoClient(MONGO_URL);

/* Routes */

//GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect(MONGO_URL); // Connect to the MongoDB server
    console.log('Connected successfully to server');

    const db = client.db("apnacollege-db");
    const data = await db.collection('users').find({}).toArray();
    
    client.close();
    res.send(data);
});

//POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(req.body); // { name: 'John Doe', email: 'john.doe@example.com' }
    
    await client.connect(MONGO_URL); // Connect to the MongoDB server
    console.log('Connected successfully to server');

    const db = client.db("apnacollege-db");
    const data = await db.collection('users').insertOne(userObj);
    console.log(data);
    console.log("data inserted in DB");
    client.close();
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});