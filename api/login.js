const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
  const signin = async (req, res) => {
    if (!req.body.email || !req.body.senha) {
      return res.json({ error: "dados", msg: "Ops! Preencha todos os dados." });
    }

    const user = await app
      .db("users")
      .from("users")
      .join("permission", "permission.user_id", "=", "users.id")
      .select(
        "users.id",
        "users.cpf",
        "users.password",
        "users.nomecompleto",
        "users.email",
        "users.prontuarioid",
        "permission.cliente_id"
      )
      .where({ email: req.body.email })
      .first();

    if (user) {
      bcrypt.compare(req.body.senha, user.password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.json({ error: "senha", msg: "Ops! Senha inválida." });
        } else if (parseInt(req.body.clienteid) === user.cliente_id) {
          const payload = { id: user.id };
          res.json({
            autorization: true,
            id: user.id,
            prontuarioid: user.prontuarioid,
            nomecompleto: user.nomecompleto,
            token: jwt.encode(payload, authSecret)
          });
        }
      });
    } else {
      res.json({ error: "e-mail", msg: "Ops! E-mail não cadastrado." });
    }
  };

  return { signin };
};
