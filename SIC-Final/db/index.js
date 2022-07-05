//This is to make the SQL queries and get the data needed in RAW data form

const mysql = require('mysql');
require('dotenv').config();

//Localhost connection details, correct them in MySQL workbench
// console.log(process.env.SQLDATA);

const pool = mysql.createPool({
    connectionLimit: 10,
    password: `${process.env.SQL_PASSWORD}`,
    user: `${process.env.SQL_USER}`,
    host: `${process.env.SQL_HOST}`,
    port: `${process.env.SQL_PORT}`,
    database: `${process.env.SQL_DATABASE_NAME}`
});

let userdata = [];

userdata.all = () => {

    return new Promise((resolve , reject ) => {

        //We got the images from here
        pool.query(`SELECT * FROM testusers;` , (err , results) =>{
            if(err){
                console.log(err);
                return reject(err);
            }
            return resolve(results);
            
        })
    })
};

//For a single specific username

userdata.user = ( user ,username) => {
    // return 'Hello';

    return new Promise((resolve , reject ) => {
        pool.query(`SELECT image0,image1,image2,image3,image4,image5,image6,image7,image8  FROM ${user} WHERE USERNAME = '${username}';` , (err , results) =>{
            if(err){
                //Its called in the routes file
                return reject(err);
            }
            //Promise is resolved in the routes file
            
            return resolve(results);
            
        })
    })
};

//Update Hashes here using the password verification system

userdata.setPassword = (user , username , password ) => {
    return new Promise((resolve , reject) => {
        pool.query(`UPDATE ${user} set password='${password}' where username='${username}';`, (err , results) => {
            if(err){
                console.log(user , userdate ,password);
                return reject(err);
            }

            return resolve(results);
        })
    })
}

userdata.fetchPassword = (user , username) => {
    return new Promise((resolve , reject) => {
        pool.query(`SELECT password FROM ${user} WHERE username='${username}'` , (err , results) => {
            if(err){
                return reject(err);
            }

            return resolve(results);
        })
    })
}

module.exports = userdata;