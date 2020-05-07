const { create, find, update, deleteInOcl } = require("../db_apis/appuser.js");

// !! change variable name to increase reusability of fns and code
function getObjectFromRec(req) {
  const obj = {
    username: req.body.username && req.body.username,
    account: req.body.account && req.body.account,
    sex: req.body.sex && req.body.sex,
    status: req.body.status && req.body.status,
    tag: req.body.tag && req.body.tag,
  };

  return obj;
}

async function post(req, res, next) {
  try {
    let obj = getObjectFromRec(req);
    obj.password = req.body.password;

    const result = await create(obj);

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;

async function get(req, res, next) {
  try {
    let rows;
    if (req.params.params) {
      rows = await find(req.params.params);
    } else {
      rows = await find();
    }

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
    context.id = req.params.params;
    const recordId = await deleteInOcl(context);

    res.status(200).json(recordId);
  } catch (err) {
    next(err);
  }
}

module.exports.deleteRecord = deleteRecord;

// @@ put /api/category:id
// @@ desc update one record in

async function put(req, res, next) {
  try {
    let obj = getObjectFromRec(req);

    console.log(obj, "obj10");
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
