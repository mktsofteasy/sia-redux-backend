module.exports = app => {
  const cancelaPreagenda = (req, res) => {
    app
      .db("preagenda")
      .from("preagenda")
      .where("preagenda.id", req.params.id)
      .del()
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { cancelaPreagenda };
};
