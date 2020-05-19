const insertQuery = `insert into category (
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
  ) returning id
  into :id`;

module.exports.insertQuery = insertQuery;

module.exports.selectQuery = `SELECT title "title",
priority "priority",
genre_list "genre_list",
usageyn "usageyn",
id "id"
FROM react.category`;

const deleteQuery = `DELETE FROM react.category`;

module.exports.deleteQuery = deleteQuery;

const updateQuery = `update category
  set workspace_id = :workspace_id,
    title = :title,
    priority = :priority,
    genre_list = :genre_list,
    usageyn = :usageyn
  where id = :id`;

module.exports.updateQuery = updateQuery;
