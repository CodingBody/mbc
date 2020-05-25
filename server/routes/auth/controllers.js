const database = require("../../services/database.js");
const { selectQuery } = require("./query.js");
const { loginValidator } = require("./../../common/joi");
const Joi = require("joi");

// @route POST api/auth
// @desc authenticate user and get token
// @access Public

const loginAdmin = async (req, res) => {
  const { error, value } = Joi.validate({ ...req.body }, loginValidator);
  if (error) {
    console.log("calledd");
    console.log(error.message);
    return res.status(400).json({
      errors: [{ message: "Invalid Credentials", alerttype: "warning" }],
    });
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
    return res.status(404).json({
      errors: [{ message: "Invalid Credentials", alerttype: "warning" }],
    });
  }

  if (result.rows.length > 0) {
    return res.status(200).json({ result: result.rows[0] });
  }
};

module.exports = { loginAdmin };
