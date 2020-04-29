const oracledb = require("oracledb");
const database = require("../services/database.js");

// @@ have the same order for all queries
// @@ returns object id that came
// @@ write workspace_id statically
// @@ alter
const createSql = `insert into app_user (
    workspace_id,
    username,
    account,
    password,
    status,
    tag,
    sex,
    avatar_index,
    unixtime,
    created_by
  ) values (
    :workspace_id,
    :username,
    :account,
    :password,
    :status,
    :tag,
    :sex,
    :avatar_index,
    :unixtime,
    :created_by 
  ) returning id
  into :id`;

// returns object that came
async function create(obj) {
  try {
    obj.workspace_id = "WS216863988676954993388743949988460632986";
    const record = Object.assign({}, obj);
    const avatar_index = Math.random() * 10000000;
    const unixtime = Math.random() * 10000000;

    record.avatar_index = Math.floor(avatar_index);
    record.unixtime = Math.floor(unixtime);
    record.created_by = "admin";

    record.id = {
      dir: oracledb.BIND_OUT,
      type: oracledb.STRING,
    };
    const result = await database.simpleExecute(createSql, record);
    // createSql = statement,  category = binds
    delete record.workspace_id;
    delete record.avatar_index;
    delete record.unixtime;
    delete record.created_by;
    record.id = result.outBinds.id[0];

    return record;
  } catch (err) {
    console.error(err);
  }
}

module.exports.create = create;

// @@ alter
const baseQuery = `SELECT username "username",
account "account",
status "status",
tag "tag",
sex "sex",
id "id"
FROM react.app_user`;

// returns objects from db
async function find(context) {
  let query = baseQuery;
  const binds = {};
  // !!Using bind variables with Oracle Database
  // is very important for security and performance reasons.

  if (context.id) {
    binds.id = context.id;

    query += `\nwhere id = :id`;
  }

  const result = await database.simpleExecute(query, binds);
  // !! report
  console.log(result, "result");
  if (Array.isArray(result.rows)) {
    return result.rows;
  } else {
    console.log(result);
  }
}

module.exports.find = find;

// @@ alter
const deleteQuery = `DELETE FROM react.app_user`;
//

// returns id that came
async function deleteInOcl(context) {
  let query = deleteQuery;
  const binds = {};
  console.log(context, "context");

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

// @@ returns object id that came
// @@ write workspace_id statically
// @@ alter
const updateSql = `update app_user
  set username = :username,
    account = :account,
    password = :password,
    status = :status,
    tag = :tag,
    sex = :sex,
    updated_by = :updated_by
  where id = :id`;
//

async function update(obj, req) {
  try {
    obj.id = req.params.id;
    //   Object.assign is just copy for checking
    // to prevent direct modification
    const record = Object.assign({}, obj);
    record.updated_by = "admin";

    const result = await database.simpleExecute(updateSql, record);
    // createSql = statement,  category = binds

    // createSql = statement,  category = binds
    delete record.updated_by;

    console.log(result, "record");
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
