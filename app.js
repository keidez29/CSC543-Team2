const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public_html'))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public_html/homepage.html'));
});

app.use('/', router);

router.get('/search',function(req,res){
  res.sendFile(path.join(__dirname+'/public_html/search-page.html'));
});
 
router.get('/upload',function(req,res){
  res.sendFile(path.join(__dirname+'/public_html/upload.html'));
});

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/public_html/user-login.html'));
});

app.listen(80, () => console.log('Application is running'));
