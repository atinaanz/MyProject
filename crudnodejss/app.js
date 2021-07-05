const express = require("express");
const {request}= require('express');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const app = express();
const bodyParser = require('body-parser');

const db = require('./config/db');

//HANDLEBARS MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//HOME PAGE ROUTER
app.get('/', (req, res) => 
res.send('horeeee respon nodejs berhasil'));
//res.render('app', {
  //  title: 'Profile app',
   // profiles
 // })
//app.use(express.urlencoded({extended: true}));

//MENGHUBUNGANKAN NODEJS DENGAN DATABASE
db.authenticate().then(() => 
    console.log('berhasil terkoneksi dengan database!!!!!:)')
);

const User = require('./models/User');


//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------


//Profiles API Routes
app.use('/api/profiles', require('./router/api/profiles'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

