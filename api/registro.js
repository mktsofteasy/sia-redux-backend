const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
  const obterHash = (password, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, null, (err, hash) => callback(hash));
    });
  };

  const save = (req, res) => {
    obterHash(req.body.senha, hash => {
      const senha = hash;
      app
        .db("users")
        .insert({
          email: req.body.email,
          password: senha,
          prontuarioid: req.body.dadosusuario.prontuarioid,
          cpf: req.body.dadosusuario.cpf,
          nomecompleto: req.body.dadosusuario.nome,
          sexo: req.body.dadosusuario.sexo,
          celular: req.body.dadosusuario.fone
        })
        .returning(["id", "cpf", "nomecompleto"])
        .then(function(user) {
          const id = user[0].id;
          const doccpf = user[0].cpf;
          const nome = user[0].nomecompleto;
          app
            .db("permission")
            .insert({
              user_id: id,
              cliente_id: req.body.dadosusuario.clienteid,
              prontuario: req.body.dadosusuario.prontuario,
              senhawebpro: req.body.dadosusuario.senhawebpro
            })
            .then(
              _ => res.status(204),
              res.json({
                permission: true,
                usuario: doccpf,
                nome: nome
              })
            )
            .catch(
              _ => res.status(400),
              res.json({
                permission: false
              })
            );
        })
        .catch(function(err) {
          return err;
        });
    });
  };

  return { save };
};
