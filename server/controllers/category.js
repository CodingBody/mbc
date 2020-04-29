const { create, find, update, deleteInOcl } = require("../db_apis/category.js");

// !! change variable name to increase reusability of fns and code
function getObjectFromRec(req) {
  const obj = {
    title: req.body.title,
    priority: req.body.priority,
    genre_list: req.body.genre_list,
    usageyn: req.body.usageyn,
  };

  return obj;
}

async function post(req, res, next) {
  try {
    let obj = getObjectFromRec(req);

    const result = await create(obj);

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);

    const rows = await find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;

async function deleteRecord(req, res, next) {
  try {
    const context = {};
    context.id = req.params.id;
    const recordId = await deleteInOcl(context);

    res.status(200).json(recordId);
  } catch (err) {
    next(err);
  }
}

module.exports.deleteRecord = deleteRecord;

// @@ put /api/category:id
// @@ desc update one record in
// !! workspace_id static
// !! id doesn't return from db
async function put(req, res, next) {
  try {
    let obj = getObjectFromRec(req);

    result = await update(obj, req);
    if (result !== null) {
      res.status(200).json(result);
    } else {
      console.log("update failed in oracleDb");
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

module.exports.put = put;
