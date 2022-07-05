const express = require('express');
const db = require('../db');
const bcrypt = require('bcrypt');

let outputResult, outputQuery,copyImageTitles = [], imageTitles = [], images;

components = {};

components.output = async (user ,username) => {
    //You are not touching the init function cuz it's in raw sql , If you use it the get API will not be working
    let init = await db.user(`${user}`,`${username}`);

    //outputResults is a sendable JSON doc but you wanna save it to verify it with the user input side of password

    outputResult = JSON.stringify(init[0]);

    //You are using this to do wild to generate a JSON which can be Shuffled for sending it to the user

    outputQuery = JSON.parse(outputResult);
    images = Object.values(outputQuery);

    return images;
}

function jsonConvert(object) {
    object = JSON.stringify(object);
}

components.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(8);
    const hashPassword = await bcrypt.hash(password , salt )
    console.log(hashPassword);
    return hashPassword;
}

components.randomArr = (array1, array2) => {
    var i = array1.length;
    var rnd, temp1, temp2;

    while (i) {
        rnd = Math.floor(Math.random() * i);
        i -= 1;
        temp1 = array1[i];
        temp2 = array2[i];
        array1[i] = array1[rnd];
        array2[i] = array2[rnd];
        array1[rnd] = temp1;
        array2[rnd] = temp2;
    }

    return [array1, array2];

}

function titleGenerator() {
    var length = 12,
        charset = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`,
        temp = "";

    for (var i = 0, n = charset.length; i < length; ++i) {
        temp += charset.charAt(Math.floor(Math.random() * n));
    }
    return temp;
}


components.getImages = (array) => {
    for (i = 0; i <= 8; i++) {
        array[i] = titleGenerator();
    }
    copyImageTitles = imageTitles;
    // console.log(copyImageTitles);
    return imageTitles;
}

components.jsonConverter = (key, values) => {
    let shuffledArrays = components.randomArr(key, values);
    let keyArr = shuffledArrays[0]; valuesArr = shuffledArrays[1];
    var result = Object.assign.apply({}, keyArr.map((v, i) => ({ [v]: valuesArr[i] })));
    return JSON.stringify(result);
}

components.verification = (data , response) => {
    let hashesArr = data;
    let responseArr = Object.keys(response);
    console.log(hashesArr , responseArr);
    bcrypt.compare(responseArr , hashesArr , (err , res) => {
        if(req.body.password != user.password){
            res.json({success: false, message: 'passwords do not match'});
          }
        else{
            return true;
        }
    })
//     if (hashesArr == responseArr) {
//         // console.log("This shit works");
//         return true;
//     }
//     else {
//         console.log("Ayo What ?");
//         return false;
//     }
}

module.exports = components;