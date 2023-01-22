const express = require('express');
const app = express();
const mysql = require('mysql');
const mongodb = require('mongodb');
// const mongoose  = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "",
    database : "employee"
    
    });

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees", (err,result) => {
        if (err){ 
            console.log(err);
        }else{
            res.send(result);

        }
    });
});

app.listen('3001', () => {
    console.log('listening on 3001');
})

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb+srv://wiewworkmotion:0826521401Wiew@cluster0.pu7bm.mongodb.net/?retryWrites=true&w=majority/'
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("customers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//     db.close();
//   });



// mongoose.connect('mongodb+srv://wiewworkmotion:0826521401Wiew@cluster0.pu7bm.mongodb.net/?retryWrites=true&w=majority');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));