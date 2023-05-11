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
