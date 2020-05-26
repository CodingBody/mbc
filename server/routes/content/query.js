module.exports.insertQuery = `insert into content (
  workspace_id,
  cp_id,
  category_id,
  url_image,
  title,
  story,
  artist_list,
  is_delete,
  episode,
  lang,
  priority,
  genre_list,
  usageyn
) values (
  :workspace_id,
  :cp_id,
  :category_id,
  :url_image,
  :title,
  :story,
  :artist_list,
  :is_delete,
  :episode,
  :lang,
  :priority,
  :genre_list,
  :usageyn
) returning id
into :id`;

// go to category and get title
// go to cp and get name

module.exports.selectQuery = `SELECT title "title",
lang "lang",
priority "priority",
artist_list "artist_list",
genre_list "genre_list",
usageyn "usageyn"
FROM react.content`;

// module.exports.deleteQuery =  `DELETE FROM react.category`;

// module.exports.updateQuery = `update category
// set workspace_id = :workspace_id,
//   title = :title,
//   priority = :priority,
//   genre_list = :genre_list,
//   usageyn = :usageyn
// where id = :id`;;
