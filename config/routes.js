module.exports = app => {
  app.post("/signup", app.api.user.save);
  app.post("/signin", app.api.auth.signin);
  app.put("/infos", app.api.infos.save);
  app.get("/convenios", app.api.convenios.list);
  app.get("/labs/:id", app.api.labs.labs);
  app.get("/labconv/:id", app.api.labconv.labconv);
  app.get("/laboratorios/:id", app.api.laboratorios.laboratorios);
  app.get("/preagendados/:id", app.api.preagendados.preagendados);
  app.get("/preagendadosdet/:id", app.api.preagendadosdet.preagendadosdet);
  app.post("/preagendadosadd", app.api.preagendadosadd.preagendadosadd);
  app.get("/pushnotification", app.api.pushnotification.enviopush);
  app.get("/agendados/:id", app.api.agendados.agendados);
  app.get("/agendadosexm/:id", app.api.agendadosexm.agendadosexm);
  // NOVAS ROTAS
  app.post("/registro", app.api.registro.save);
  app.post("/login", app.api.login.signin);
  app.post("/preagendar", app.api.preagendar.preagendar);
  app.del("/preagendados/cancela/:id", app.api.preagendadosdel.cancelaPreagenda);
  app.post("/mensagens", app.api.mensagens.mensagens);
  app.post("/mensagens/update", app.api.mensagens.update);
};
