const category = require("../db_apis/category.js");

function getEmployeeFromRec(req) {
  const ctg = {
    title: req.body.title,
    priority: req.body.priority,
    genre_list: req.body.genre_list,
    usageyn: req.body.usageyn,
  };

  return ctg;
}

async function post(req, res, next) {
  try {
    let ctg = getEmployeeFromRec(req);
    ctg.workspace_id = "WS216872339735446745482442404217120305487";

    result = await category.create(ctg);

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);

    const rows = await category.find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;
