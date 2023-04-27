const uploadButton = document.getElementById("upload-button")
let uploadScreen = document.getElementById("upload-video-screen")


let showUploadScreen = () => {

if (uploadScreen.style.display="none") {

        uploadScreen.style.display="flex"
    }

else {
    uploadScreen.style.display="none"
}
}

uploadButton.addEventListener("click",showUploadScreen)
