const oracledb = require("oracledb");
const dbConfig = require("../config/database.js");

async function initialize() {
  const pool = await oracledb.createPool(dbConfig.hrPool);
}

module.exports.initialize = initialize;

async function close() {
  await oracledb.getPool().close();
}

module.exports.close = close;

function simpleExecute(statement, binds = [], opts = {}) {
  return new Promise(async (resolve, reject) => {
    let conn;

    // !!Using bind variables with Oracle Database
    // is very important for security and performance reason
    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = true;

    try {
      conn = await oracledb.getConnection();
      console.log(statement, binds, "statement and binds");
      console.log(conn, "conn");

      const result = await conn.execute(statement, binds, opts);

      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      if (conn) {
        // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

module.exports.simpleExecute = simpleExecute;

function transactionExecute(func1) {
  return new Promise(async (resolve, reject) => {
    let conn;
    let result;

    let opts = {};
    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = false;

    try {
      //console.log(func1);

      conn = await oracledb.getConnection();

      result = await func1(conn, opts);

      result = await conn.commit();

      resolve(result);
    } catch (err) {
      result = await conn.rollback();

      reject(err);
    } finally {
      if (conn) {
        // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

module.exports.transactionExecute = transactionExecute;
