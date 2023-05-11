const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const multer = require('multer');


app.use(express.static('public_html'))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public_html/homepage.html'));
});

app.use('/', router);

router.get('/search',function(req,res){
  res.sendFile(path.join(__dirname+'/public_html/search-page.html'));
});
 
router.get('/upload',function(req,res){
  res.sendFile(path.join(__dirname+'/public_html/upload.html'));
});

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/public_html/user-login.html'));
});

/*
let qObj = {name: document.getElementById("userName").value,
password: document.getElementById("password").value
};
let AJAX = new XMLHttpRequest(); //create AJAX object
AJAX.onerror = function() { //attach error event handler
alert("Network error");
}
AJAX.onload = singnupOnload; //attach load event handler
//setup the connection parameters
AJAX.open("POST","http://34.75.141.24/upload-vid");
AJAX.setRequestHeader("Content-type", "application/json");
AJAX.send(queryObjectToString(qObj));

*/
app.listen(80, () => console.log('Application is running'));
