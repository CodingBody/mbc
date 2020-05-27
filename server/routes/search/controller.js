const getQuery = require("./query");
const Joi = require("joi");
const { search } = require("./../../common/joi");
const database = require("../../services/database.js");

const find = async (query) => {
  const binds = {};

  const result = await database.simpleExecute(query, binds);
  if (Array.isArray(result.rows)) {
    return result.rows;
  } else {
    throw Error("something wrong in oracle");
  }
};

module.exports.get = async (req, res) => {
  // do validation here

  const category = req.headers.category;
  const params = req.params.params;
  // do good care on params to prevent web injection
  const error = search(category, params);
  if (error) {
    return res.status(400).json({
      errors: [{ message: "Bad request", alerttype: "warning" }],
    });
  }

  const query = getQuery(category, params);
  if (!query) {
    return res.status(400).json({
      errors: [{ message: "Bad request", alerttype: "warning" }],
    });
  }
  // go to find here
  rows = await find(query);

  if (rows.length > 0) {
    return res.status(200).json(rows);
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
