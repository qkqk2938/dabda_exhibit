
const promiseMysql = require('promise-mysql');
let pool;
let _querytime;
let option = JSON.parse(process.env.DB);

const createPool = async  () =>{
  console.log(option);
  pool = await promiseMysql.createPool(option);
};
createPool();

const simpleQuery = fn => async ( ...args) =>{
    let con = await pool.getConnection()
    /* 비지니스 로직에 con을 넘겨준다. */
    
    const result = await fn(con, ...args).catch(error => { 
        console.log(error)
        con.connection.release();
        throw error;
    });
    /* con을 닫아준다. */
    //console.log('rr',result)
    con.connection.release();
    _querytime = new Date();
    return result;
};
const transaction = fn => async ( ...args) =>{
      
    let con = await pool.getConnection()
    /* 비지니스 로직에 con을 넘겨준다. */
    await con.connection.beginTransaction();
    const result = await fn(con, ...args).catch( async(error) => { 
        console.log(error)
        await con.rollback();
        con.connection.release();
        throw error;
    });
    /* con을 닫아준다. */
    //console.log('rr',result)
    await con.commit();
    con.connection.release();
    _querytime = new Date();
    return result;
};
const querytime = function(){
  return _querytime
}

module.exports.simpleQuery = simpleQuery;
module.exports.transaction = transaction;
module.exports.querytime = querytime;