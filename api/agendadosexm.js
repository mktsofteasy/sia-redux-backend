module.exports = app => {

  const agendadosexm = (req, res) => {
    app
      .db("agendadoexm")
      .from("agendadoexm")
      .join("agendado", "agendado.id", "=", "agendadoexm.agendado_id")
      .select(
        "agendadoexm.id",
        "agendado.orcamento_id as orcamento",
        "agendadoexm.nomeexm as exame",
        "agendadoexm.preparoexm as preparacao"
      )
      .orderBy('agendadoexm.nomeexm', 'asc')
      .where("agendadoexm.agendado_id", req.params.id)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { agendadosexm };
};
