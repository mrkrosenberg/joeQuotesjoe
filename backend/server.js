const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);
router.route('/')
    .get((req, res)=>{
        res.send('YOU GOT HERE!')
    });

// router.route('/reseed')
//     .post((req,res)=>{
//         db.query('DROP TABLE IF EXISTS quotes')
//     });

db = mysql.createPool(process.env.CLEARDB_DATABASE_URL || {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT
});


app.listen(process.env.PORT,console.log('POTATO SERVER IS RUNNING! Port:',process.env.PORT));