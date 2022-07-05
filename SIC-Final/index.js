const express = require('express');
const apiRouter = require('./server/routes.js');
const app = express();
const cors = require('cors')

app.use(cors("http://127.0.0.1:5501"));

app.use(express.json());

app.use('/' , apiRouter);


app.listen(3000 , (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("You are listening on port 3000") 
    }
})