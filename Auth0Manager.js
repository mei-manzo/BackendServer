var ManagementClient = require('auth0').ManagementClient;
var auth0 = new ManagementClient({
    domain: 'melandalin.us.auth0.com',
    clientId: 'H5NA6UmUpuvdAFYqTyo9cjQz28nvhSvQ',
    clientSecret: 'Zch6ceM8me9nThaEuo53b0H1BU6sEgw3EOOMJxFVb8kulp63lvHcLeG9xTcGkr0O',
    scope: 'read:users update:users'
});


//access token code
var AuthenticationClient = require('auth0').AuthenticationClient;

var auth0 = new AuthenticationClient({
    domain: 'melandalin.us.auth0.com',
    clientId: 'H5NA6UmUpuvdAFYqTyo9cjQz28nvhSvQ', //noninteractive client id
    clientSecret: 'Zch6ceM8me9nThaEuo53b0H1BU6sEgw3EOOMJxFVb8kulp63lvHcLeG9xTcGkr0O'
});

//defining localStorage
var LocalStorage = require('node-localstorage').LocalStorage, //here we are defining the localstorage variable
localStorage = new LocalStorage('./scratch');


auth0.clientCredentialsGrant(
    {
        audience: 'https://melandalin.us.auth0.com/api/v2/',
        scope:  'read:users update:users'
    },
    function(err, response) {
        if (err) {
      // Handle error.
        }
        console.log(response.access_token); //this seems to output the bearer access token for our data!
        var myToken = (response.access_token);
        localStorage.setItem("myToken", myToken);
        localStorage.setItem("first", "name");
    }
);



//////GENERATE RULES BY CALLING MANAGEMENT API BELOW
var request = require("request"); //requests bearer management API token, should work

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


var axios = require("axios").default;


var options = {
    method: 'GET',
    url: 'https://melandalin.us.auth0.com/api/v2/clients', //Bearer token allows for Managment API access, manual works
    headers: {'content-type': 'application/json', authorization: 'Bearer '+ myToken}, //add a variable to swap in a new token
    scope: 'read:rules',
    };

console.log("...");
console.log("...");

axios.request(options).then(function (response) {
    console.log(response.data);
    userRules = response.data;
    localStorage.setItem("rules",JSON.stringify(userRules));//saving rules to scratch
    }).catch(function (error) {
    console.error(error);
});
