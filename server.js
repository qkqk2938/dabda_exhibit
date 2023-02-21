const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();
require('dotenv').config();
var noticeApi  = require('./api/noticeApi');
const options = {

  ca: fs.readFileSync('/etc/letsencrypt/live/dabda.co.kr/fullchain.pem'),

  key: fs.readFileSync('/etc/letsencrypt/live/dabda.co.kr/privkey.pem'),

  cert: fs.readFileSync('/etc/letsencrypt/live/dabda.co.kr/cert.pem')

};


app.use(express.static(path.join(__dirname, 'dabda/build')));

// app.listen(3000, function () {
//   console.log('listening on 3000')
// }); 

app.use('/api/notice',noticeApi);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dabda/build/index.html'));
});

http.createServer(app).listen(3000);
https.createServer(options, app).listen(5000);