const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const https = require('https');
const http = require('http');
const fs = require('fs');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


//other folders
app.use('/css', express.static('css'));
app.use('/images',express.static(__dirname + '/images'));
app.use('/js',express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/static', { dotfiles: 'allow' } ));

//add the router
app.use('/', router);
const port = process.env.port || 443;
//app.listen(port);

const environment = process.env.NODE_ENV;
console.log(`The environment is ${environment}`);

if(environment==='prod'){
  // Redirect from http port 80 to https
    http.createServer(function (req, res) {
      console.log('Starting a server which will redirect all of the requests to https')
      res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
      res.end();
    }).listen(80);

  https.createServer({
    key:  fs.readFileSync('/etc/letsencrypt/live/boatrides.miami/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/boatrides.miami/cert.pem'),
    ca:   fs.readFileSync('/etc/letsencrypt/live/boatrides.miami/chain.pem')
  }, app).listen(443, () => {
    console.log('Running production  443')
  })
}else{
  http.createServer(app).listen(80, () => {
    console.log('Running at Port '+ 80);
  })
}
