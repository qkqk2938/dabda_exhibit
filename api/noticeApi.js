var express = require('express');
var router = express.Router();
var sql = require('../logic/SQL')

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


 router.post('/getNoticeList', function(req, res) {

    sql.getNoticeList(null).then(r=>{
      res.send({data:r})

    })

});


module.exports = router ;