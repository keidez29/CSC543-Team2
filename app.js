
    /* Team 2 - Keila Hernandez, Austin Granchelli, Donte Brooks, Valon Ajeti
    (Final Project)
    This is our app.js file.  Using express, this file communicates with the server
    when a file is submitted.  The file is then stored in the "Videos" directory. */



const express = require('express');
const upload = require('express-fileupload')
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public_html'))

app.use(upload())

app.use(express.static(__dirname))
app.use(express.static("/public_html/css"))

    console.log("Listening on port 80.")

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