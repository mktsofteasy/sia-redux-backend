module.exports = app => {
  const labconv = (req, res) => {
    app
      .db("unidadesconv")
      .from("unidadesconv")
      .join("unidades", "unidades.id", "=", "unidadesconv.unidade_id")
      .join("laboratorios", "laboratorios.id", "=", "unidades.laboratorio_id")
      .select(
        "unidades.id",
        "unidades.nome as unidade_nome",
        "laboratorios.nome as laboratorio_nome",
        "laboratorios.cor",
        "unidades.latitude",
        "unidades.longitude"
      )
      .where("convenio_id", req.params.id)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { labconv };
};
