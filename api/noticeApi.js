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

router.post('/getNoticeDetail/:id', function(req, res) {
  var value = req.params;
  if(value ===undefined ){
    res.status(500).json({ msg: "INVALID REQUEST" });
    return;
  }
  if(value != undefined){
    sql.getNoticeDetail(value).then(r=>{
      res.send({data:r})
    })
  }else{
    res.send({msg:'TRANSIMTTER ID NOT FOUND'})
  } 
});

router.post('/increaseHit', function(req, res) {
  var value = req.body;
  if(value ===undefined ){
    res.status(500).json({ msg: "INVALID REQUEST" });
    return;
  }
  if(value != undefined){
    sql.increaseHit(value).then(r=>{
      res.send({data:r})
    })
  }else{
    res.send({msg:'TRANSIMTTER ID NOT FOUND'})
  } 
});

router.post('/insertNotice', function(req, res) {
  var value = req.body;
  if(value ===undefined ){
    res.status(500).json({ msg: "INVALID REQUEST" });
    return;
  }
  if(value != undefined){
    sql.insertNotice(value).then(r=>{
      res.send({data:r})
    })
  }else{
    res.send({msg:'TRANSIMTTER ID NOT FOUND'})
  } 

});

router.post('/deleteNotice', function(req, res) {
  var value = req.body;
  if(value ===undefined ){
    res.status(500).json({ msg: "INVALID REQUEST" });
    return;
  }
  if(value != undefined){
    sql.deleteNotice(value).then(r=>{
      res.send({data:r})
    })
  }else{
    res.send({msg:'TRANSIMTTER ID NOT FOUND'})
  } 

});


module.exports = router ;