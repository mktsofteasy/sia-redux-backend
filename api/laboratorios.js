module.exports = app => {
  const laboratorios = (req, res) => {
    app
      .db("unidades")
      .from("unidades")
      .join("laboratorios", "laboratorios.id", "=", "unidades.laboratorio_id")
      .select(
        "laboratorios.id as laboratorio_id",
        "laboratorios.nome as laboratorio_nome",
        "unidades.id as unidade_id",
        "unidades.nome",
        "unidades.cep",
        "unidades.logradouro",
        "unidades.numero",
        "unidades.complemento",
        "unidades.bairro",
        "unidades.cidade",
        "unidades.uf",
        "unidades.telefone",
        "unidades.horario",
        "unidades.estacionamento"
      )
      .where("unidades.id", req.params.id)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { laboratorios };
};
