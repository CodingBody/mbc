const oracledb = require("oracledb");
const database = require("../services/database.js");

const createSql = `insert into category (
    workspace_id,
    title,
    priority,
    genre_list,
    usageyn
  ) values (
    :workspace_id,
    :title,
    :priority,
    :genre_list,
    :usageyn
  )`;

async function create(cat) {
  try {
    //   Object.assign is just copy for checking
    // to prevent direct modification
    const category = Object.assign({}, cat);

    //   category.category_id = {
    //     dir: oracledb.BIND_OUT,
    //     type: oracledb.NUMBER,
    //   };
    const result = await database.simpleExecute(createSql, category);
    console.log(result, "result");
    //createSql = statement,  category = binds
    //   category.category_id = result.outBinds.category_id[0];
    console.log(category, "category");
    return category;
  } catch (err) {
    console.error(err);
  }
}

module.exports.create = create;

const baseQuery = `SELECT title "title",
    priority "priority",
    genre_list "genre_list",
    title_eng "title_eng",
    usageyn "usageyn"
  FROM react.category`;

async function find(context) {
  let query = baseQuery;
  const binds = {};
  // !!Using bind variables with Oracle Database
  // is very important for security and performance reasons.

  if (context.id) {
    binds.id = context.id;

    query += `\nwhere seq = :employee_id`;
  }

  const result = await database.simpleExecute(query, binds);
  console.log(result, "result");
  return result.rows;
}

module.exports.find = find;
