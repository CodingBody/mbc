const oracledb = require("oracledb");
const database = require("../services/database.js");

const createSql = `insert into category (
    title,
    title_eng,
    priority,
    genre_list,
    usageyn,
  ) values (
    :title,
    :title_eng,
    :priority,
    :genre_list,
    :usageyn,
  ) returning employee_id
  into :employee_id`;

async function create(cat) {
  //   Object.assign is just copy for checking
  // to prevent direct modification
  const employee = Object.assign({}, cat);

  employee.employee_id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER,
  };

  const result = await database.simpleExecute(createSql, employee);
  //createSql = statement,  employee = binds
  employee.employee_id = result.outBinds.employee_id[0];

  return employee;
}

module.exports.create = create;
