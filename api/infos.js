module.exports = app => {
  const save = (req, res) => {
    app
      .db("users")
      .where({ cpf: req.body.dados.cpf })
      .returning("cpf")
      .update({
        datanascimento: req.body.infos.datanascimento,
        email: req.body.infos.email,
        celular: req.body.infos.celular,
        cep: req.body.infos.endereco.cep,
        logradouro: req.body.infos.endereco.logradouro,
        numero: req.body.infos.endereco.numero,
        complemento: req.body.infos.endereco.complemento,
        bairro: req.body.infos.endereco.bairro,
        cidade: req.body.infos.endereco.cidade,
        uf: req.body.infos.endereco.uf,
        docfrente: req.body.docs.docfrente,
        docverso: req.body.docs.docverso,
        convenio_id: req.body.convenio.id,
        cartfrente: req.body.convenio.cartfrente,
        cartverso: req.body.convenio.cartverso,
        visita: true
      })
      .then(_ =>
        res.status(204),
        res.json({
          "dados" : {
            "visita" : (true)
          }
        })
      )
      .catch(err => res.status(400).json(err));
  };
  return { save };
};
