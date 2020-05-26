module.exports = async (req, res) => {
  const category = req.headers.category;

  console.log(category);
  console.log(req.params.params);

  return res.status(200).json({ test: "hi" });
};
