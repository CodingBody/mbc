const server_info = require("../controllers/server_info.js");
const employees = require("../controllers/employees.js");
const login_oculus = require("../controllers/login_oculus.js");
const login_livr = require("../controllers/login_livr.js");
const session_oid = require("../controllers/session_oid.js");
const session_lid = require("../controllers/session_lid.js");
const mapping_lid = require("../controllers/mapping_lid.js");
const avatar = require("../controllers/avatar.js");
const avatar_position = require("../controllers/avatar_position.js");
const version = require("../controllers/version.js");

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../routes/auth/controllers.js");
const category = require("../routes/category/controllers.js");
const appuser = require("../routes/appUser/controllers.js");

router
  .route("/auth/login")
  .post(
    [
      check("workspace_name", "workspace is required").exists(),
      check("name", "Please include a valid email").exists(),
      check("password", "Password is required").exists(),
    ],
    auth.loginAdmin
  );

// @@ param_1 represents how many columns
// @@ param_2 represents title
// the reason of do post request intead of get is to send data from client to check
// the number of column user wanna see
// this fn would be too heavy for frontend
router
  .route("/category/:params?")
  .post(category.post)
  .delete(category.deleteRecord)
  .put(category.put);
router.route("/get/category/:params?").post(category.get);

// @@ param_1 represents how many columns
router
  .route("/appuser/:params?")
  .post(appuser.post)
  .get(appuser.get)
  .put(appuser.put)
  .delete(appuser.deleteRecord);

// router
//   .route("/login/oculus")
//   .get(login_oculus.get)
//   .post(login_oculus.post)
//   .put(login_oculus.post);

// router
//   .route("/login/livr")
//   .get(login_livr.get)
//   .post(login_livr.post)
//   .put(login_livr.post);

// router.route("/session/oculus").get(session_oid.get);

// router.route("/session/livr").get(session_lid.get);

// router.route("/mapping/list").get(mapping_lid.get);

// router.route("/avatar").get(avatar.get).post(avatar.post).put(avatar.post);

// router.route("/avatar/position").get(avatar_position.get);

// router.route("/version").get(version.get);

// router.route("/server_info").get(server_info.get);

module.exports = router;
