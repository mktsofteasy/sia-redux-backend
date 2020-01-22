module.exports = app => {

  const agendados = (req, res) => {
    app
      .db("agendado")
      .from("agendado")
      .join("unidades", "unidades.id", "=", "agendado.unidade_id")
      .join("users", "users.id", "=", "agendado.user_id")
      .join("laboratorios", "laboratorios.id", "=", "unidades.laboratorio_id")
      .select(
        "agendado.id as id",
        "laboratorios.nome as laboratorio_nome",
        "unidades.nome",
        "unidades.telefone",
        "unidades.cep",
        "unidades.logradouro",
        "unidades.numero",
        "unidades.complemento",
        "unidades.bairro",
        "unidades.cidade",
        "unidades.uf",
        "unidades.horario",
        "unidades.estacionamento",
        "agendado.orcamento_id as orcamento",
        "agendado.datacoleta as datacoleta"
      )
      .where("agendado.datacoleta", "<=", new Date().toUTCString())
      .orderBy('agendado.datacoleta', 'asc')
      .where("agendado.user_id", req.params.id)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { agendados };
};
