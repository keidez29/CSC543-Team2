const express = require("express")
const fileUpload = require("express-fileupload")
const path = require("path")

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "project_543.html"))
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


