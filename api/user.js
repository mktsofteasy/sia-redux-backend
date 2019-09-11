const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
  const obterHash = (password, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, null, (err, hash) => callback(hash));
    });
  };

  const save = (req, res) => {
    obterHash(req.body.dados.senha, hash => {
      const password = hash;

      app
        .db("users")
        .insert({
          nomecompleto: req.body.dados.nomecompleto,
          cpf: req.body.dados.cpf,
          password,
          visita: req.body.dados.visita
        })
        .then(
          _ => res.status(204),
          res.json({
            dados: {
              cpf: req.body.dados.cpf,
              senha: req.body.dados.senha
            }
          })
        )
        .catch(function(err) {
          return err;
        });
      //.catch(err => res.status(400).json(err));
    });
  };

  return { save };
};
