<?php 
$target_dir = "./video_thumbnails";
$target_file = $target_dir.basename($_FILES["fileToUpload"]["name"])
$UploadOk = 1
$thumbnailFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if(isset($_POST["submit"])) {
    $check = getimages($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - ". $check["mime"].".";
        $uploadOk = 1;
    }
    else {
        echo "File must have extension .jpg,.jpeg, or .png."
        $uploadOk = 0;
    }
}

if ($FILES["fileToUpload"]["size"] > 300000) {
    echo "Image file size must be 300 KB or less."
    $uploadOk = 0;
}

if ($thumbnailFileType != "jpg" && $thumbnailFileType != "png" && $thumbnailFileType != "jpeg" && $thumbnailFileType != "jpg") {
    echo("File type must be jpg,png, or jpeg")
}
?>