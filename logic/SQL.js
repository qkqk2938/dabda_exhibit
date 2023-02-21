'use strict'
var mysql  = require('../module/db.js');
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['./logic/query/notice.xml']);
var format = {language: 'sql', indent: '  '};

module.exports.getNoticeList =  mysql.simpleQuery( async (con, id )=>{
    var map ={id:id};
    var query =  mybatisMapper.getStatement('notice','getNoticeList',map,format);    
    console.log(query);
    return await con.query(query);
});

module.exports.getNoticeDetail =  mysql.simpleQuery( async (con, id )=>{
    var map ={id:id};
    var query =  mybatisMapper.getStatement('notice','getNoticeDetail',map,format);    
    console.log(query);
    return await con.query(query);
});

module.exports.increaseHit =  mysql.simpleQuery( async (con, id )=>{
    var map ={id:id};
    var query =  mybatisMapper.getStatement('notice','increaseHit',map,format);    
    console.log(query);
    return await con.query(query);
});