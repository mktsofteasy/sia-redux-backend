module.exports = app => {
  const preagendados = (req, res) => {
    app
      .db("preagenda")
			.from("preagenda")
			.join("unidades", "unidades.id", "=", "preagenda.unidade_id")
			.join("laboratorios", "laboratorios.id","=","unidades.laboratorio_id")
      .select(
				"preagenda.id",
				"laboratorios.nome as lab",
				"unidades.nome as unid",
				"preagenda.status",
      ).orderBy("id","desc")
			//.where("preagenda.user_id", req.params.id)
			.where("preagenda.user_id", req.params.id)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { preagendados };
};
