import fastify from "fastify";
import { connectionDatabase } from "./config/database";
import { findMonitorById, getMonitores } from "./controllers/monitorController";

const app = fastify();

connectionDatabase();

app.get('/monitores', getMonitores);
app.get('/monitores/:id', findMonitorById);

app.listen({ port: 3333 }, () => {
  console.log(`API funcionando na porta ${3333}`);
});