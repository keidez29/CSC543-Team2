

// Keila Hernandez & Austin Granchelli
// CSC 543 - HW6
// 12 April 2023
// Description: Main Application

import express from 'express'
import upload from 'express-fileupload'
import { fileURLToPath } from 'url'
import path from 'path'
import * as fs from 'fs'


const videoApp = express()

const fileName = fileURLToPath(import.meta.url)

const __dirname = path.dirname(fileName) 

videoApp.use(upload())
videoApp.use(express.static(__dirname + 'public_html'))

    console.log("Listening on port 80.")


videoApp.get( "/",(req,res) =>{
    
    res.sendFile(__dirname + '/public_html/upload.html')
})

videoApp.post('/', (req,res)=> {
    if (req.files) {
       
        let file = req.files.file

        let fileName = file.name
        
        console.log(fileName)

        file.mv(`./video_uploads/${fileName}`, (err) => {
            if (err) {
                res.send(err)
            }

            else { 
                // res.sendFile(__dirname + "./public_html/videos")
                res.send("File uploaded")
                console.log(videoApp.use(upload()))
                console.log(`"${file.name}" uploaded successfully.`)
            }
            
        })
        
    }})


videoApp.listen(80)



