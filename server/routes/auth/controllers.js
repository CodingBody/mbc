const oracledb = require("oracledb");
const database = require("../../services/database.js");
const { selectQuery } = require("./query.js");
// const gravatar = require("gravatar");
const { validationResult } = require("express-validator");

// @route POST api/auth
// @desc authenticate user and get token
// @access Public

const loginAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("runed");
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, password, workspace_name } = req.body;

  const context = { name, password, workspace_name };
  let query = selectQuery;
  const binds = {};

  binds.password = context.password;
  binds.name = context.name;

  query += `\nWHERE password = :password AND name = :name`;

  const result = await database.simpleExecute(query, binds);
  if (result.rows.length < 1) {
    return res.status(404).json({ errors: [{ msg: "Invalid Credentials" }] });
  }

  if (result.rows.length > 0) {
    return res.status(200).json({ result: result.rows[0] });
  }
};

module.exports = { loginAdmin };
