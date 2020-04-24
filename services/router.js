const express = require("express");
const router = express.Router();
const server_info = require("../controllers/server_info.js");
const employees = require("../controllers/employees.js");
const category = require("../controllers/category.js");

const login_oculus = require("../controllers/login_oculus.js");
const login_livr = require("../controllers/login_livr.js");
const session_oid = require("../controllers/session_oid.js");
const session_lid = require("../controllers/session_lid.js");
const mapping_lid = require("../controllers/mapping_lid.js");
const avatar = require("../controllers/avatar.js");
const avatar_position = require("../controllers/avatar_position.js");
const version = require("../controllers/version.js");

const auth = require("../controllers/auth.js");
const { check } = require("express-validator");

router
  .route("/auth/register")
  .post(
    [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
    ],
    auth.registerPost
  );

router
  .route("/auth/login")
  .post(
    [
      check("username", "Please include a valid email").exists(),
      check("password", "Password is required").exists(),
    ],
    auth.loginPost
  );

router.route("/category").post(category.post).get(category.get);

router
  .route("/employees/:id?")
  .get(employees.get)
  .post(employees.post)
  .put(employees.put)
  .delete(employees.delete);

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
