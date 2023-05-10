<<<<<<< HEAD


// Keila Hernandez & Austin Granchelli
// CSC 543 - HW6
// 12 April 2023
// Description: Main Application

import express from 'express'
import upload from 'express-fileupload'
import { fileURLToPath } from 'url'
import path from 'path'
import { fileReader } from './fileTypes.js'
import * as fs from 'fs'



const videoApp = express()

const fileName = fileURLToPath(import.meta.url)

const __dirname = path.dirname(fileName)

videoApp.use(upload(),express.static(__dirname + '/public_html'))
videoApp.use(express.static(path.join(__dirname + "/")))

console.log("Listening on port 80.")



videoApp.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public_html/project_543.html')
})

videoApp.post('/', (req,res)=> {
    if (req.files) {
       
        let file = req.files.file

        let fileName = file.name


        file.mv(fileReader(file.name) + fileName, (err) => {
            if (err) {
                res.send(err)
            }

            else { 
                res.sendFile(__dirname + "/public_html/Page.html")
                console.log(videoApp.use(upload()))
                console.log(`"${file.name}" uploaded successfully.`)
            }
            
        })
        
    }})


videoApp.listen(80)

const videoFileDirectory = "video_uploads"
fs.readdir(videoFileDirectory, (err,files) => {
   return(files)
})

const thumbnailFileDirectory = "video_thumbnails"
fs.readdir(videoFileDirectory, (err,files) => {
   return(files)
})



export {videoFileDirectory,thumbnailFileDirectory}


// import { createServer } from 'http';
// import { readFile } from 'fs';
// import { parse } from 'url';
// import { fileReader} from './servermod.js';
// import express from 'express';

// import path from 'path'


// const express = require("express")

// const path = require('path')



// import module that reads files and handles errors

//passes filename to module to get its extension

// __dirname +

// const express = require('express')
// const fileUpload = require('express-fileupload')
// const videoApp = express()

// // const mainDir = require("./");

// // videoApp.use(bodyParser.urlencoded({extended: false}))
// videoApp.use(fileUpload())
// videoApp.use(mainDir)

// videoApp.get('/', (req, res) => {
// 	res.sendFile(__dirname + "/client_side/Page.html")
// })

// videoApp.post("/client_side", (req,res) =>{
// 	if (req.files) {
// 		console.log(req.files)
// 		let file = req.files.file
// 		let fileName = file.name	
// 	}
// 	else {
// 		console.log("no response")
// 	}
// })


// videoApp.get('/static_files/style.css', (req, res) => {
// 	res.sendFile(path.join(__dirname, "client_side", "static_files", "style.css"));
// })

// videoApp.post('/',(req,res)=>{
// 	if (req.files) {
// 		console.log(req.files)
// 	}
// })

// videoApp.listen(80)
// console.log("Listening on port 80.")







// videoApp.set("view engine", "hbs")

// videoApp.use(express.static(path.join(__dirname, "..", "/views/public")))

// videoApp.use(express.static("./views/public/Images"))

// videoApp.get("/Final_Project",(req,res)=>{
// 	res.send({"ret":"success"})
// 	// res.render("home.hbs")
// });



// const server = videoApp.listen(80,() =>{
// 	console.log("Listening on port",server.address().port);
// })






// videoApp.get("/", function (req, res) {
// 	res.sendFile( "./" + "project_543.html");
// });

// videoApp.get("./local_video_files", function (req,res) {
// 	let headerRange = req.headers.range
// 	if (!headerRange) {
// 		res.status(400).send("Must have a range header.")
// 	}

// 	let videoName = "20201231_185837.mp4";
// 	let videoSize = fs.statSync("20201231_185837.mp4").size;

// 	let videoChunkSize = 10 ** 6;
// 	let videoStart = Number(range.replace(/\D/g, ""))
// 	let videoEnd = Math.min(videoStart + videoChunkSize, videoSize - 1)

// 	let vidLength = videoEnd - videoStart + 1

// 	let headers =  {
// 		"Content-Range": `bytes ${videoStart}-${videoEnd}/${videoSize}`,
// 		"Accept-Ranges": "bytes",
// 		"Concept-Length": vidLength,
// 		"Content-Type": "video/mp4"
// 	};

// 	res.writeHead(206, headers);

// 	const videoStream = fs.createReadStream(videoName, {videoStart, videoEnd})

// 	videoStream.pipe(res)
// })

// videoApp.listen(80, function() {
// 	console.log("Listening on port 80")
// })





// let serveStatic = function (req, res) {

// 	let fileName = './public_html/' + parse(req.url).pathname;
   
// 	readFile(fileName,function(err,data) {
        
// 	  if (err) {
		
//             res.writeHead(404, {
//                 'Content-Type': 'text/plain'
//             });
//             res.write('Error 404: resource not found.');
//             res.end();
// 	  }
// 	  else {
// 		res.writeHead(200, {'Content-Type': `${fileReader(fileName)}` });
// 		res.write(data);
// 		res.end();
// 	  }
// 	})
// }

// let myserver = createServer(serveStatic); //create a server object
// myserver.listen(80, function() {console.log("Listening on port 80" )});



// let express = require("express")
// let fileUpload = require("express-fileupload")
// let path = require("path")

// let PORT = process.env.PORT || 8080;

// let app = express();

// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "project_543.html"))
// })
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))






=======
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('homepage.html').pipe(res)
})
server.listen(80);
>>>>>>> origin/valon
