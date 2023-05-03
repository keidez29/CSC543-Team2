// const uploadButton = document.getElementById("upload-button")
// let uploadScreen = document.getElementById("upload-video-screen")

const thumbnailUploadButton = document.getElementById("thumbnail-upload")

let homepageVideos = document.querySelector("video")


homepageVideos.addEventListener("mouseover", function () {
    homepageVideos.play()
})

homepageVideos.addEventListener("mouseout", function () {
    homepageVideos.pause()
})

homepageVideos.addEventListener("click", function () {
    homepageVideos.controls = true;
    homepageVideos.removeEventListener()
})










