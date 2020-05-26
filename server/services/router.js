const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
// routes
const { loginAdmin } = require("../routes/auth/controllers.js");
const category = require("../routes/category/controllers.js");
const appuser = require("../routes/appUser/controllers.js");
const rank = require("../routes/rank/controller");
const content = require("../routes/content/controller");
const search = require("./../routes/search/controller");
// helper
const tryCatch = require("../middleware/tryCatch");

router.route("/auth/login").post(tryCatch(loginAdmin));

router
  .route("/category/:params?")
  .post(tryCatch(category.post))
  .delete(tryCatch(category.deleteRecord))
  .put(tryCatch(category.put))
  .get(tryCatch(category.get));

// @@ param_1 represents how many columns
router
  .route("/appuser/:params?")
  .post(appuser.post)
  .get(appuser.get)
  .put(appuser.put)
  .delete(appuser.deleteRecord);

router.route("/statistics.rank/:params?").get(tryCatch(rank.get));

router
  .route("/content/:params?")
  .get(tryCatch(content.get))
  .post(tryCatch(content.post));
// !! need to make delete and update

router.route("/search/:params?").get(tryCatch(search));

module.exports = router;
