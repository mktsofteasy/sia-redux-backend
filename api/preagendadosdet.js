module.exports = app => {
  const preagendadosdet = (req, res) => {
    app
      .db("preagenda")
      .from("preagenda")
      .join("unidades", "unidades.id", "=", "preagenda.unidade_id")
			.join("laboratorios", "laboratorios.id", "=", "unidades.laboratorio_id")
      .select(
				"preagenda.id",
				"preagenda.datapreagenda",
        "laboratorios.nome as lab",
				"unidades.nome as unid",
				"preagenda.pedidomedico",
				"preagenda.tipoatend",
				"preagenda.status"
      )
      //.where("preagenda.user_id", req.params.id)
      .where("preagenda.id", req.params.id)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      });
  };
  return { preagendadosdet };
};


// module.exports = app => {
//   const preagendadosdet = (req, res) => {
//     app
//       .db("preagenda")
//       .from("preagenda")
//       .join("unidades", "unidades.id", "=", "preagenda.unidade_id")
// 			.join("laboratorios", "laboratorios.id", "=", "unidades.laboratorio_id")
// 			.join("convenios", "convenios.id", "=", "preagenda.convenio_id")
//       .select(
// 				"preagenda.id",
// 				"preagenda.datapreagenda",
//         "laboratorios.nome as lab",
// 				"unidades.nome as unid",
// 				"convenios.fantasia",
// 				"preagenda.diadasemana",
// 				"preagenda.periodo",
// 				"preagenda.pedido1",
// 				"preagenda.pedido2",
// 				"preagenda.pedido3",
// 				"preagenda.status"
//       )
//       //.where("preagenda.user_id", req.params.id)
//       .where("preagenda.id", req.params.id)
//       .then(results => {
//         res.json(results);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   };
//   return { preagendadosdet };
// };

