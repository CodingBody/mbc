const oracledb = require("oracledb");
const database = require("../../services/database.js");
const {
  insertQuery,
  selectQuery,
  deleteQuery,
  updateQuery,
} = require("./query");
const { checkSort } = require("../../common/helper");

module.exports.create = async function (obj) {
  // @@ alter
  obj.workspace_id = "WS216863988676954993388743949988460632986";
  // need to query to category to get id with name
  obj.category_id = "CA220730732197688569612859900718626097993";
  obj.cp_id = "CP221353291606403053286331143428151163954";
  // obj.assetimage_id = "test2";

  // !! do  ASSETIMAGE_ID and url_image, after query to s3
  obj.URL_IMAGE = "test";
  obj.is_delete = 1;
  obj.priority = 1;
  obj.lang = 1;
  obj.episode = 1;
  // obj.lang = obj.Language;
  delete obj.Language;
  delete obj.category;
  delete obj.cp_name;

  const record = Object.assign({}, obj);

  record.id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.STRING,
  };

  const result = await database.simpleExecute(insertQuery, record);
  // createSql = statement,  category = binds
  record.id = result.outBinds.id[0];

  delete record.workspace_id;

  //   returns object
  return record;
};

// !! fix NaN in query

module.exports.find = async function (req) {
  const params = req.params.params;
  let query = selectQuery;
  let param = params;
  const binds = {};
  if (param !== null && param !== undefined) {
    // param is title here
    query += `\nWHERE title like '%${param}%'`;
  }

  const query_after_sort = checkSort(req, query);

  const result = await database.simpleExecute(query_after_sort, binds);

  // if no record, it returns empty arr
  if (Array.isArray(result.rows)) {
    return result.rows;
  } else {
    throw Error("something wrong in oracle");
  }
};

// returns id that came

// module.exports.deleteInOcl = async function (context) {
//   let query = deleteQuery;
//   const binds = {};

//   if (context.id) {
//     binds.id = context.id;

//     query += `\nwhere id = :id`;
//   }

//   const result = await database.simpleExecute(query, binds);

//   // !! report
//   if (result.lastRowid && result.rowsAffected === 1) {
//     result.id = binds.id;

//     return result.id;
//   } else {
//     throw Error("delete failed");
//   }
// };

// // returns object that came
// // @@ alter

// //

// module.exports.update = async function (obj, req) {
//   obj.workspace_id = "WS216863988676954993388743949988460632986";
//   obj.id = req.params.params;
//   //   Object.assign is just copy for checking
//   // to prevent direct modification
//   const record = Object.assign({}, obj);

//   const result = await database.simpleExecute(updateQuery, record);
//   // createSql = statement,  category = binds

//   delete record.workspace_id;

//   if (result.rowsAffected && result.rowsAffected === 1) {
//     return record;
//   } else {
//     throw Error("update faliled");
//   }
// };
