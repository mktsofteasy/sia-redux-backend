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
      .then(
        _ => res.status(204),
        res.json({
          id: preagenda.id
        })
      )
      .catch(err => res.status(400).json(err));
  };
  return { preagendadosadd };
};
