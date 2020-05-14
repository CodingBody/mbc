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
    // 200 means everything's ok 400 which is bad request
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, password, workspace_name } = req.body;

  const context = { name, password, workspace_name };
  try {
    let query = selectQuery;
    const binds = {};

    if (context.password) {
      binds.password = context.password;
      binds.name = context.name;

      query += `\nWHERE password = :password AND name = :name`;
    }

    const result = await database.simpleExecute(query, binds);
    // !! report
    return res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { loginAdmin };
