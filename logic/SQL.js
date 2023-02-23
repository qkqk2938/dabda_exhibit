'use strict'
var mysql  = require('../module/db.js');
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['./logic/query/notice.xml']);
var format = {language: 'sql', indent: '  '};

module.exports.getNoticeList =  mysql.simpleQuery( async (con, data )=>{
    var query =  mybatisMapper.getStatement('notice','getNoticeList',data,format);    
    console.log(query);
    return await con.query(query);
});

module.exports.getNoticeDetail =  mysql.simpleQuery( async (con, data )=>{
    var query =  mybatisMapper.getStatement('notice','getNoticeDetail',data,format);    
    console.log(query);
    return await con.query(query);
});

module.exports.increaseHit =  mysql.simpleQuery( async (con, data )=>{
    var query =  mybatisMapper.getStatement('notice','increaseHit',data,format);    
    console.log(query);
    return await con.query(query);
});

module.exports.insertNotice =  mysql.simpleQuery( async (con, data )=>{
    var query =  mybatisMapper.getStatement('notice','insertNotice',data,format);    
    console.log(query);
    return await con.query(query);
});

module.exports.deleteNotice =  mysql.simpleQuery( async (con, data )=>{
    var query =  mybatisMapper.getStatement('notice','deleteNotice',data,format);    
    console.log(query);
    return await con.query(query);
});
