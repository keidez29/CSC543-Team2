// Keila Hernandez & Austin Granchelli
// CSC 543 - HW6
// 12 April 2023
// Description: Server Module



//Function returns a given content type based on the extension of the file being served.

let fileReader = function (myFilePath) {

    let fileEnd = myFilePath.slice(-4)
    let dotIndex = fileEnd.lastIndexOf(".")
    let fileExt = fileEnd.slice((dotIndex+1))

    switch (fileExt) {

       case "jpg":
       case "jpeg":
       case "png":
        return("./video_thumbnails/")
        break;
       
       case "mp4":
       case "wvm":
       case "mov":
        return("./video_uploads/")
        break;
      
       default: 
        return ("invalid file format")
        
    }
}

export {fileReader}