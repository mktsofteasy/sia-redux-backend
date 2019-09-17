module.exports = app => {
  const preagendadosadd = (req, res) => {
    app
      .db("preagenda")
      .insert({
        unidade_id: req.body.agendamento.laboratorio.unidadeid,
        convenio_id: req.body.agendamento.tipoatendimento.id,
        diadasemana: req.body.agendamento.diasselecionados,
        periodo: req.body.agendamento.periodoselecionado,
        pedido1: req.body.agendamento.pedidos.ped1,
        pedido2: req.body.agendamento.pedidos.ped2,
        pedido3: req.body.agendamento.pedidos.ped3,
        datapreagenda: "2019-09-10",
        status: "Pendente",
        user_id: req.body.user.dados.id
      })
      .returning("id")
      .then(userId => {
        return app
          .db("preagenda")
          .from("preagenda")
          .join("unidades", "unidades.id", "=", "preagenda.unidade_id")
          .join(
            "laboratorios",
            "laboratorios.id",
            "=",
            "unidades.laboratorio_id"
          )
          .select(
            "preagenda.id",
            "laboratorios.nome as lab",
            "unidades.nome as unid",
            "preagenda.status"
          )
          .where("preagenda.id", userId[0])
          .then(results => {
            res.json(results[0]);
          })
          .catch(err => {
            res.json(err);
          });
      })
      .catch(err => res.status(400).json(err));
  };
  return { preagendadosadd };
};
