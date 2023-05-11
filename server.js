const http = require("http");
const url = require("url");

function processPost(req,res) {
const path = url.parse(req.url).pathname;
let body = '';
req.on('data', data => {body += data;}); // get the request data
req.on('end', () => { // request data received – call route processing function
const queryObj = querystring.parse(body);
switch (path) {
case "/signup" :
qs.signup(queryObj,res);
break;
default:
utils.sendJSONObj(res,404,{error:"route not found"});
break;
} //switch
});
