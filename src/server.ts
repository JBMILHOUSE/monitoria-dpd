import fastify from "fastify";
import { connectionDatabase } from "./config/database";
import { createMonitor, findMonitorById, getMonitores } from "./controllers/monitorController";
import fastifyCors from "@fastify/cors";

const app = fastify();

connectionDatabase();
app.register(fastifyCors, {
  origin: 'http://localhost:5173', // localhost:flutter
  methods: ['GET', 'POST', 'DELETE'],
});

app.get('/monitores', getMonitores);
app.get('/monitores/:id', findMonitorById);
app.post('/monitor', createMonitor);

app.listen({ port: 3333 }, () => {
  console.log(`API funcionando na porta ${3333}`);
});