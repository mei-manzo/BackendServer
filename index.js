// const express = require("express");
// const { join } = require("path");
// // import path from 'path';
// const fetch = require("node-fetch");




// const app = express();

// app.get("/*", (_, res) => {
//     res.sendFile(join(__dirname, "index.html"));
// });

// app.listen(8000, () => console.log("Application running on port 8000")); //run nodemon to start server



// var ManagementClient = require('auth0').ManagementClient;
// var auth0 = new ManagementClient({
//     domain: 'melandalin.us.auth0.com',
//     clientId: 'H5NA6UmUpuvdAFYqTyo9cjQz28nvhSvQ',
//     clientSecret: 'Zch6ceM8me9nThaEuo53b0H1BU6sEgw3EOOMJxFVb8kulp63lvHcLeG9xTcGkr0O',
//     scope: 'read:users update:users'
// });


// //access token code
// var AuthenticationClient = require('auth0').AuthenticationClient;

// var auth0 = new AuthenticationClient({
//     domain: 'melandalin.us.auth0.com',
//     clientId: 'H5NA6UmUpuvdAFYqTyo9cjQz28nvhSvQ', //noninteractive client id
//     clientSecret: 'Zch6ceM8me9nThaEuo53b0H1BU6sEgw3EOOMJxFVb8kulp63lvHcLeG9xTcGkr0O'
// });

// //defining localStorage
// var LocalStorage = require('node-localstorage').LocalStorage, //here we are defining the localstorage variable
// localStorage = new LocalStorage('./scratch');


// auth0.clientCredentialsGrant(
//     {
//         audience: 'https://melandalin.us.auth0.com/api/v2/',
//         scope:  'read:users update:users'
//     },
//     function(err, response) {
//         if (err) {
//       // Handle error.
//         }
//         // console.log(response.access_token); //this seems to output the bearer access token for our data!
//         var myToken = (response.access_token);
//         localStorage.setItem("myToken", myToken);
//         localStorage.setItem("first", "name");
//     }
// );



// //////GENERATE RULES BY CALLING MANAGEMENT API BELOW
// var request = require("request"); //requests bearer management API token, should work

// var options = { method: 'POST',
//     url: 'https://melandalin.us.auth0.com/oauth/token',
//     headers: { 'content-type': 'application/json' },
//     body: '{"client_id":"uejGHfjRbCHNHgrQCBruC7L6CoknpcGA","client_secret":"7FYXeYhIA_snqdH7x9NVbgYrxsI5tt93z3ZY09BISsRY1cf9tW2COxIUiwy0X1iQ","audience":"https://melandalin.us.auth0.com/api/v2/","grant_type":"client_credentials"}' };

//     request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     // console.log(body);

//     });



// //grabs automatic management api token and applies it to data retrieval

// var thisToken = localStorage.getItem("myToken");
// var myToken = thisToken;


// var axios = require("axios").default;


// var options = {
//     method: 'GET',
//     url: 'https://melandalin.us.auth0.com/api/v2/rules', //Bearer token allows for Managment API access, manual works
//     headers: {'content-type': 'application/json', authorization: 'Bearer '+ myToken}, //add a variable to swap in a new token
//     scope: 'read:rules',
//     };

// // console.log("...");

// axios.request(options).then(function (response) {
//     // console.log(response.data);
//     userRules = response.data;
//     localStorage.setItem("rules",JSON.stringify(userRules));//saving rules to scratch
//     }).catch(function (error) {
//     console.error(error);
// });

// ////render our DOM
// const updateUI = async () => {
//     // code...
//         var x = document.getElementById("app");   // Get the element with id
//         x.style.color = "red";  
// };

// // import fetch from "node-fetch"; //importing fetch api

// async function postData(url = 'http://localhost:8000/', data = {}) {
//         // Default options are marked with *
//         const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//         });
//         return response.json(); // parses JSON response into native JavaScript objects
//     }
    

// postData('http://localhost:8000/', { answer: 42 })
//     .then(data => {
//         console.log(data); // JSON data parsed by `data.json()` call
//     });

        

////////    try to repackage require below:
// const express = require("express");
import express from "express";
import request from "request";
// const { join } = require("path");
import {join} from "path";
import path from 'path';
// const fetch = require("node-fetch");
import fetch from "node-fetch"; //importing fetch api




const app = express();

app.get("/*", (_, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

app.listen(8000, () => console.log("Application running on port 8000")); //run nodemon to start server



// var ManagementClient = require('auth0').ManagementClient;
import { ManagementClient } from "auth0";

var auth0 = new ManagementClient({
    domain: 'melandalin.us.auth0.com',
    clientId: 'H5NA6UmUpuvdAFYqTyo9cjQz28nvhSvQ',
    clientSecret: 'Zch6ceM8me9nThaEuo53b0H1BU6sEgw3EOOMJxFVb8kulp63lvHcLeG9xTcGkr0O',
    scope: 'read:users update:users'
});


//access token code
// var AuthenticationClient = require('auth0').AuthenticationClient;
import pkg from 'auth0';
const { AuthenticationClient } = pkg;


var auth0 = new AuthenticationClient({
    domain: 'melandalin.us.auth0.com',
    clientId: 'H5NA6UmUpuvdAFYqTyo9cjQz28nvhSvQ', //noninteractive client id
    clientSecret: 'Zch6ceM8me9nThaEuo53b0H1BU6sEgw3EOOMJxFVb8kulp63lvHcLeG9xTcGkr0O'
});

//defining localStorage
// var LocalStorage = require('node-localstorage').LocalStorage, //here we are defining the localstorage variable
import pkg1 from "node-localstorage";
const { LocalStorage} = pkg1;

var localStorage = new LocalStorage('./scratch');


auth0.clientCredentialsGrant(
    {
        audience: 'https://melandalin.us.auth0.com/api/v2/',
        scope:  'read:users update:users'
    },
    function(err, response) {
        if (err) {
      // Handle error.
        }
        // console.log(response.access_token); //this seems to output the bearer access token for our data!
        var myToken = (response.access_token);
        localStorage.setItem("myToken", myToken);
        localStorage.setItem("first", "name");
    }
);



//////GENERATE RULES BY CALLING MANAGEMENT API BELOW
// var request = require("request"); //requests bearer management API token, should work
import pkg2 from "request";
const { request1 } = pkg2; //may need to debug!


var options = { method: 'POST',
    url: 'https://melandalin.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"uejGHfjRbCHNHgrQCBruC7L6CoknpcGA","client_secret":"7FYXeYhIA_snqdH7x9NVbgYrxsI5tt93z3ZY09BISsRY1cf9tW2COxIUiwy0X1iQ","audience":"https://melandalin.us.auth0.com/api/v2/","grant_type":"client_credentials"}' };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    // console.log(body);

    });



//grabs automatic management api token and applies it to data retrieval

var thisToken = localStorage.getItem("myToken");
var myToken = thisToken;


// var axios = require("axios").default;
import axios from "axios";


var options = {
    method: 'GET',
    url: 'https://melandalin.us.auth0.com/api/v2/rules', //Bearer token allows for Managment API access, manual works
    headers: {'content-type': 'application/json', authorization: 'Bearer '+ myToken}, //add a variable to swap in a new token
    scope: 'read:rules',
    };

console.log("...");

axios.request(options).then(function (response) {
    // console.log(response.data);
    var userRules = response.data;
    localStorage.setItem("rules",JSON.stringify(userRules));//saving rules to scratch
    }).catch(function (error) {
    console.error(error);
});

////render our DOM
const updateUI = async () => {
    // code...
        var x = document.getElementById("app");   // Get the element with id
        x.style.color = "red";  
};

// import fetch from "node-fetch"; //importing fetch api

async function postData(url = 'http://localhost:8000/', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.text(); // parses JSON response into native JavaScript objects
    }
    

postData('http://localhost:8000/', { answer: 42 })
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    });

        