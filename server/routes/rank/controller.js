const database = require("../../services/database.js");
// const selectQuery = `SELECT content_id "content_id",
// targetdate "targetdate",
// id "id"
// FROM react.view_details`;

const selectQuery = `SELECT CONTENT_ID,
content_id title,
count(*) count,
max(created) last_watch
from view_details
where LOGFLAG = 1    
and to_char(created,'yyyy-mm-dd') >= '2020-05-01'
and to_char(created,'yyyy-mm-dd') <= '2020-05-31'
group by content_id
order by count desc
`;

const find = async (req) => {
  const params = req.params.params;
  let query = selectQuery;
  //   params stands for search
  let param = params;
  if (param !== null && param !== undefined) {
    query += `\nWHERE title like '%${param}%'`;
  }

  //   query_after_update stands for sorting
  //   const query_after_update = checkSort(req, query);

  const binds = {};
  const result = await database.simpleExecute(query, binds);
  console.log(result, "result");
  if (Array.isArray(result.rows)) {
    return result.rows;
  } else {
    console.log(result);
  }
};

module.exports.get = async function (req, res) {
  rows = await find(req);

  if (rows.length > 0) {
    res.status(200).json(rows);
  } else {
    res.status(200).json(rows);
  }
};
