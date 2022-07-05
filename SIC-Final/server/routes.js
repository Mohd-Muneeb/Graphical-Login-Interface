const express = require('express');
const app = express();
const db = require('../db/index')
const router = express.Router();
const components = require('../components')
const cors = require('cors')

app.use(cors({ origin: 'http://127.0.0.1:5500/' }));

router.post('/users/api/register' , async(req  ,res , next) => {
    try {

    }
    catch (err){
        console.log(err);
        res.send(err).sendStatus(500);
    }
})

router.post('/users/api/login', async (request, res, next) => {

    try {
        // console.log(request.body);
        let imageTitles = [];
        await components.getImages(imageTitles);
        const finalKey = imageTitles.join("");
        console.log(finalKey);
        let images = await components.output(request.body.user ,request.body.username);
        res.send(components.jsonConverter(imageTitles, images)); //---Top priority
        db.setPassword(request.body.user, request.body.username , finalKey);
    } catch (err) {
        console.log(err);
        res.send(err).sendStatus(500);
    };
})


router.post('/users/api/verify', async (request, res, next) => {
    try {

        let fetchedKey = await db.fetchPassword(request.body.user , request.body.username);
        const finalKey = request.body.password;
        
        let answerKey = JSON.parse(JSON.stringify(fetchedKey[0]));
        

        // console.log(answerKey.password,finalKey);
        if (finalKey == answerKey.password) {
            res.send(`True Password`);
        }
        else {
            res.send(`Wrong Password`);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }


})

module.exports = router;