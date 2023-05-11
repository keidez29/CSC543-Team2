<<<<<<< HEAD
// const uploadButton = document.getElementById("upload-button")
// let uploadScreen = document.getElementById("upload-video-screen")

// import { videoFileDirectory,thumbnailFileDirectory } from "../../app"

// const thumbnailForm = document.getElementById("thumbnail_form")
// const videoForm = document.getElementById("video-upload")
// const thumbnailUploadButton = document.getElementById("thumbnail-upload")
// const videoSubmitButton = document.getElementById("videoSubmit")


const search = document.getElementById("search-box").value 

alert(search)






// const AJAX = new XMLHttpRequest;

// AJAX.onreadystatechange = () => {
//     if (this.readyState == 4 && )
// }







// thumbnailForm.addEventListener("submit", (event) =>{
//    event.preventDefault();
//    const = videoSucc
//    fetch("http://0.0.0.0:80/public_html/js") {
//     method: 'POST'
//     body:  
//    }

// })




// const GetVideos = () => {

//     const AJAX = new XMLHttpRequest();

//     AJAX.open("PUT", "0.0.0.0:80../video_uploads", true)

//     AJAX.onload = () => {
//         if (AJAX.status === 200)
//         {console.log("success")
//         let videos = JSON.parse(this.response)
//         console.log(videos)
//         videos.array.forEach(video => {

            
//         });
    
//     }

//     }


    
// }



// let homepageVideos = document.querySelector("video")


// homepageVideos.addEventListener("mouseover", function () {
//     homepageVideos.play()
// })

// homepageVideos.addEventListener("mouseout", function () {
//     homepageVideos.pause()
// })

// homepageVideos.addEventListener("click", function () {
//     homepageVideos.controls = true;
//     homepageVideos.removeEventListener()
// })










=======
const fs = require('fs');

let VTitle = document.getElementById("VTitle");
let Dscript = document.getElementById("Dscript");
let genre = document.getElementById("Genre1");
let filename = document.getElementById("filename');
let vidupload = document.getElementById("vidupload");

vidupload.addEventListener("submit", fucntion() {
    data = {
        "title":VTitle.value,
        "description":Dscript.value,
	"genre":genre.value,
	"filename":filename.value
    }
    
    // append data to file
    fs.appendFile('data.json',data, 'utf8',
    // callback function
    function(err) {     
        if (err) 
	   "Error";});
});
>>>>>>> 052ac2e5dff79deab020c136f418495e2e0507fc
