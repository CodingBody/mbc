const oracledb = require("oracledb");
const database = require("../services/database.js");

// !! this order
// @@ alter
const createSql = `insert into category (
    workspace_id,
    title,
    priority,
    genre_list,
    usageyn
  ) values (
    :workspace_id,
    :title,
    :priority,
    :genre_list,
    :usageyn
  ) returning id
  into :id`;

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

    const result = await database.simpleExecute(createSql, record);
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
const baseQuery = `SELECT title "title",
priority "priority",
genre_list "genre_list",
usageyn "usageyn",
id "id"
FROM react.category`;

// returns objects from db
async function find(params) {
  let query = baseQuery;
  const binds = {};
  if (params) {
    // params is title here
    query += `\nwhere title like '%${params}%'`;
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
const deleteQuery = `DELETE FROM react.category`;
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
const updateSql = `update category
  set workspace_id = :workspace_id,
    title = :title,
    priority = :priority,
    genre_list = :genre_list,
    usageyn = :usageyn
  where id = :id`;
//

async function update(obj, req) {
  try {
    obj.workspace_id = "WS216863988676954993388743949988460632986";
    obj.id = req.params.params;
    //   Object.assign is just copy for checking
    // to prevent direct modification
    const record = Object.assign({}, obj);

    const result = await database.simpleExecute(updateSql, record);
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
