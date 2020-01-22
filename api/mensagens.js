module.exports = app => {
  const mensagens = (req, res) => {
    app
      .db("mensagens")
      .from("mensagens")
      .select(
        "id",
        "user_id",
        "cliente_id",
        "titulo",
        "corpomsg",
        "lida",
        "status",
        "adddata",
        "updatedata"
      )
      .where("user_id", req.body.user_id)
      .where("cliente_id", req.body.cliente_id)
      .orderBy("lida", "asc")
      .orderBy("adddata", "desc")
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };

  const update = (req, res) => {
    app
      .db("mensagens")
      .from("mensagens")
      .where("id", req.body.id)
      .update({
        lida: true,
        status: req.body.status,
        updatedata: new Date()
      })
      .then(results => {
        res.json({ msg: "Alterado com sucesso!" });
      })
      .catch(err => {
        res.json(err);
      });
  };

  const esvaziarLixeira = (req, res) => {
    app
      .db("mensagens")
  .from("mensagens")
      .where("user_id", req.body.user_id)
      .where("cliente_id", req.body.cliente_id)
      .where("status", "lixeira")
      .del()
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };

  return { mensagens, update, esvaziarLixeira };
};
