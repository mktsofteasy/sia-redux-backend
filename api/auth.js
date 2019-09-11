const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
  const signin = async (req, res) => {
    if (!req.body.dados.cpf || !req.body.dados.senha) {
      return res.status(400).json({ error: "Ops! Preencha todos os dados." });
    }

    const user = await app
      .db("users")
      .from("users")
      .join("convenios", "convenios.id", "=", "users.convenio_id")
      .select(
        "users.id",
        "users.cpf",
        "users.password",
        "users.nomecompleto",
        "users.visita",
        "users.convenio_id",
        "convenios.fantasia"
      )
      .where({ cpf: req.body.dados.cpf })
      .first();

    if (user) {
      bcrypt.compare(req.body.dados.senha, user.password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({ error: "Ops! Senha inválida." });
        }

        const payload = { id: user.id };
        res.json({
          dados: {
            id: user.id,
            token: jwt.encode(payload, authSecret),
            nomecompleto: user.nomecompleto,
            cpf: user.cpf,
            visita: user.visita
          },
          convenio: {
            id: user.convenio_id,
            nomefantasia: user.fantasia
          }
        });
      });
    } else {
      res.status(400).json({ erro: "Ops! CPF não encontrado." });
    }
  };

  return { signin };
};
