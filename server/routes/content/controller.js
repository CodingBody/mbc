const { create, find, update, deleteInOcl } = require("./db_apis.js");
const { filterColumns } = require("../../common/helper");
const { createContent } = require("../../common/joi");
const Joi = require("joi");

module.exports.post = async function (req, res) {
  const { error, value } = Joi.validate({ ...req.body }, createContent);
  if (error) {
    return res.status(400).json({
      errors: [{ message: "Bad request", alerttype: "warning" }],
    });
  }

  const result = await create(req.body);

  //   returns object
  res.status(201).json(result);
};

module.exports.get = async function (req, res) {
  // what to do if there a one row returned
  rows = await find(req);
  const columns = JSON.parse(req.headers.column_names);
  //   if empty arr comes, it returns empty
  const result = filterColumns(columns, rows);

  if (rows.length > 0) {
    res.status(200).json(result);
  } else {
    return res.status(404).json({
      errors: [
        {
          message: "not found any record",
          alerttype: "warning",
        },
      ],
    });
  }
};

module.exports.deleteRecord = async function (req, res) {
  const context = {};
  context.id = req.params.params;
  const recordId = await deleteInOcl(context);

  res.status(200).json(recordId);
};

module.exports.put = async function (req, res) {
  let obj = getObjectFromRec(req);

  result = await update(obj, req);
  if (result !== null) {
    res.status(200).json(result);
  } else {
    console.log("update failed in oracleDb");
    res.status(404).end();
  }
};
