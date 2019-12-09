module.exports = app => {
  const labs = (req, res) => {
    app
      .db("siaredux")
      .from("laboratorios")
      .select(
        "id",
        "nome",
        "primaria",
        "secundaria",
        "tercearia",
        "conexao"
      )
      .where("id", req.params.id)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { labs };
};
