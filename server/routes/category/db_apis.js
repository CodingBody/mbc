const oracledb = require("oracledb");
const database = require("../../services/database.js");
const {
  insertQuery,
  selectQuery,
  deleteQuery,
  updateQuery,
} = require("./query");
// !! this order

// returns object that came
async function create(obj) {
  try {
    // @@ alter
    obj.workspace_id = "WS216863988676954993388743949988460632986";

    const record = Object.assign({}, obj);

    record.id = {
      dir: oracledb.BIND_OUT,
      type: oracledb.STRING,
    };

    const result = await database.simpleExecute(insertQuery, record);
    // createSql = statement,  category = binds
    record.id = result.outBinds.id[0];

    delete record.workspace_id;

    return record;
  } catch (err) {
    console.error(err);
  }
}

module.exports.create = create;

// @@ alter

// returns objects from db
// !! fix NaN in query
async function find(params) {
  let query = selectQuery;
  console.log(selectQuery, "selectQuery");
  const binds = {};
  let param = params;
  if (param !== null && param !== undefined) {
    // param is title here
    query += `\nwhere title like '%${param}%'`;
  }

  const result = await database.simpleExecute(query, binds);
  // !! report
  if (Array.isArray(result.rows)) {
    return result.rows;
  } else {
    console.log(result);
  }
}

module.exports.find = find;

// @@ alter
//

// returns id that came
async function deleteInOcl(context) {
  let query = deleteQuery;
  const binds = {};

  if (context.id) {
    binds.id = context.id;

    query += `\nwhere id = :id`;
  }

  const result = await database.simpleExecute(query, binds);

  // !! report
  if (result.lastRowid && result.rowsAffected === 1) {
    result.id = binds.id;

    return result.id;
  } else {
    throw Error("no record has been deleted");
  }
}

module.exports.deleteInOcl = deleteInOcl;

// returns object that came
// @@ alter

//

async function update(obj, req) {
  try {
    obj.workspace_id = "WS216863988676954993388743949988460632986";
    obj.id = req.params.params;
    //   Object.assign is just copy for checking
    // to prevent direct modification
    const record = Object.assign({}, obj);

    const result = await database.simpleExecute(updateQuery, record);
    // createSql = statement,  category = binds

    delete record.workspace_id;

    if (result.rowsAffected && result.rowsAffected === 1) {
      return record;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports.update = update;
