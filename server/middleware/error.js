module.exports = function (err, req, res, next) {
  console.error(err.message);
  console.error("ex error called");
  res.status(500).json({
    errors: [
      {
        msg: "Server error",
      },
    ],
  });
};
