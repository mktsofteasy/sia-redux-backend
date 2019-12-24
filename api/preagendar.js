module.exports = app => {
  const preagendar = (req, res) => {
    app
      .db("preagenda")
      .insert({
        user_id: req.body.user_id,
        prontuarioid: req.body.prontuarioid,
        unidade_id: req.body.unidadeid,
        tipoatend: req.body.tipoatend,
        pedidomedico: JSON.stringify(req.body.pedidomedico),
        datapreagenda: new Date(),
        status: "Pendente"
      })
      .then(result => res.status(200).json(result))
      .catch(err => res.status(400).json(err));
  };
  return { preagendar };
};