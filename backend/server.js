const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

router.route('/')
    .get((req, res)=>{
        console.log('got here?');
        res.send('YOU GOT HERE!')
    });

app.listen(3000,console.log('POTATO SERVER IS RUNNING!'));