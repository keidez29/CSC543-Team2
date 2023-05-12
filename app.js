const express = require('express');
const upload = require('express-fileupload')
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
// app.listen(80, () => console.log('Application is running'));


// Keila Hernandez & Austin Granchelli
// CSC 543 - HW6
// 12 April 2023
// Description: Main Application



app.use(upload())

app.use(express.static(__dirname))
app.use(express.static("/public_html/css"))

    console.log("Listening on port 80.")

// const server = http.createServer((req, res) => {
//  res.writeHead(200, { 'content-type': 'text/html' })
//  fs.createReadStream('homepage.html').pipe(res)
// })
// server.listen(80);
// app.get( "/",(req,res) =>{
// const server = http.createServer((req, res) => {
//  res.writeHead(200, { 'content-type': 'text/html' })
//  fs.createReadStream('homepage.html').pipe(res)
// })
// server.listen(80);
app.get( "/",(req,res) =>{

    res.sendFile(__dirname + '/public_html/homepage.html') })


app.post('/', (req,res)=> {
    if (req.files) {


        let file = req.files.file
        let fileName = file.name



        file.mv(`./video_uploads/${fileName}`, (err) => {
            if (err) {
                res.send(err)
            }

            else { 
                // res.sendFile(__dirname + "./public_html/videos")
                res.send("File uploaded")
                console.log(app.use(upload()))
                console.log(`"${file.name}" uploaded successfully.`)
            } })
        console.log(fileName)


          }})
        

app.listen(80)