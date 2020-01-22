module.exports = app => {
    const perfil = (request, response) => {
      app
        .db("siaredux")
        .from("users")
        .select(
          "nomecompleto",
          "cpf",
          "datanascimento",
          "email",
          "cep",
          "logradouro",
          "numero",
          "complemento",
          "bairro",
          "cidade",
          "uf",
          "sexo"
        )
        .where("id", request.params.id)  
        .then(results => {
          response.json(results);
        })
        .catch(err => {
          res.json(err);
        });
    };
    return { perfil };
  };
  