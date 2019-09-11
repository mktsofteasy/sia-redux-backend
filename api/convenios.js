module.exports = app => {
  const list = (req, res) => {
    app
      .db("convenios")
      .select("*")
      .orderBy("id")
      .then(results => {
        res.json({results});
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { list };
};
