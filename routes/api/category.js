const express = require("express");
const router = express.Router();
// models
// middleware
// config
// webtoken
// secure

// @route GET api/category
// @desc  get category
// @access privarty
router.get("/", function (req, res) {
  res.json({ message: "Hello World" });
});

module.exports = router;
