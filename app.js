

// Keila Hernandez & Austin Granchelli
// CSC 543 - HW6
// 12 April 2023
// Description: Main Application

const express = require('express')
const upload = require('express-fileupload')
const url = require('url')
const path = require('path')
const http = require('http')
const fs = require('fs')





// import { fileURLToPath } from 'url'
// import path from 'path'
// import * as fs from 'fs'

const videoApp = express()


// const fileName = fileURLToPath(import.meta.url)

// const __dirname = path.dirname(fileName) 

// videoApp.use(upload())

videoApp.use(express.static(__dirname))

videoApp.use(upload())

    console.log("Listening on port 80.")

// const server = http.createServer((req, res) => {
//  res.writeHead(200, { 'content-type': 'text/html' })
//  fs.createReadStream('homepage.html').pipe(res)
// })
// server.listen(80);
videoApp.get( "/",(req,res) =>{
  
    res.sendFile(__dirname + '/public_html/homepage.html') })
   


videoApp.post('/', (req,res)=> {
    if (req.files) {
        
        let file = req.files.file

        let fileName = file.name
        
        console.log(fileName)

        file.mv('./video_uploads/' + fileName, (err) => {
            if (err) {
                res.send(err)
            }

            else { 
                // res.sendFile(__dirname + "./public_html/videos")
                res.send("File uploaded")
                console.log(`"${file.name}" uploaded successfully.`)
            }
            
        })
        
    }})


videoApp.listen(80)



