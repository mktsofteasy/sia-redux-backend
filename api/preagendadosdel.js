module.exports = app => {
  const cancelaPreagenda = (req, res) => {
    app
      .db("preagenda")
      .where("preagenda.id", req.params.id)
      .update({
        motivocancela: req.body.motivocancela,
        status: "Cancelado"
      })
      .then(results => {
        res.json(results);
        console.log(results);
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { cancelaPreagenda };
};
