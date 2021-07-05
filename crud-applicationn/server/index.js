const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");


const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'rootqwer',
    database: 'crudmovie',
    insecureAuth: true,
});

//db.connect((err)=>{
   // if(!err) 
   // console.log('database connected..')
   // else 
   // console.log('db not connected \n Error : '+JSON.stringify(err,undefined,2));
   // });
   db.connect(function(err){
       if (err){
            console.log('DB error');
            throw err;
            //return false;
        }
        console.log('connected!');});

app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({extended:true}));

//app.post("/api/insert", (req,res) => {
  //  const movieName = req.body.movieName;
  //  const movieReview = req.body.movieReview;

   // const sqlInsert =
  //   "INSERT INTO movie_review (movieName, movieReview) VALUES ('7','7')"
  //  db.query(sqlInsert,[movieName, movieReview], (err, result)=>{
 //       console.log(err);
 //   });
//});
app.get('/',(req, res) => {
   const sqlInsert = 
        "INSERT INTO movie_review (movieName, movieReview) VALUES ('insepttion','good movie');";
   db.query(sqlInsert, (err, result)=>{
       res.send("hello atinaaaaa");
    });
    
});


app.listen(3001,() => {
    console.log("running on port 3001");
});