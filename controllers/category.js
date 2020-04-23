const category = require("../db_apis/category.js");

function getEmployeeFromRec(req) {
  const cat = {
    title: req.body.title,
    title_eng: req.body.title_eng,
    priority: req.body.priority,
    genre_list: req.body.genre_list,
    usageyn: req.body.usageyn,
  };

  return cat;
}

async function post(req, res, next) {
  try {
    let cat = getEmployeeFromRec(req);

    result = await category.create(cat);

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;
