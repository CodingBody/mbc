const { create, find, update, deleteInOcl } = require("./db_apis.js");
const filterColumns = require("../../common/helper");

function getObjectFromRec(req) {
  const obj = {
    title: req.body.title,
    priority: req.body.priority,
    genre_list: req.body.genre_list,
    usageyn: req.body.usageyn,
  };

  return obj;
}

async function post(req, res) {
  let obj = getObjectFromRec(req);

  const result = await create(obj);

  res.status(201).json(result);
}

module.exports.post = post;

async function get(req, res) {
  // if (req.headers.sort) {
  //   const sort = JSON.parse(req.headers.sort);
  //   console.log(sort, "sort");
  // }

  rows = await find(req);
  const columns = JSON.parse(req.headers.column_names);
  const result = filterColumns(columns, rows);

  if (rows.length > 0) {
    res.status(200).json(result);
  }
}

module.exports.get = get;

async function deleteRecord(req, res) {
  const context = {};
  context.id = req.params.params;
  const recordId = await deleteInOcl(context);

  res.status(200).json(recordId);
}

module.exports.deleteRecord = deleteRecord;

async function put(req, res) {
  let obj = getObjectFromRec(req);

  result = await update(obj, req);
  if (result !== null) {
    res.status(200).json(result);
  } else {
    console.log("update failed in oracleDb");
    res.status(404).end();
  }
}

module.exports.put = put;
