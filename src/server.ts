import fastify from "fastify";
import { connectionDatabase } from "./config/database";
import { createMonitor, findMonitorById, getMonitores } from "./controllers/monitorController";
import fastifyCors from "@fastify/cors";

const app = fastify();

connectionDatabase();
app.register(fastifyCors, {
  // origin: (origin, cb) => {
  //   const allowedOrigins = ['http://localhost:60179', 'http://localhost:3333/']
  //   console.log(allowedOrigins)
  //   if(!origin || allowedOrigins.includes(origin)){
  //     cb(null, true)
  //     return true
  //   } else {
  //     cb(new Error('erro de cors'), false);
  //   }
  // }, // localhost:flutter
  origin: 'http://localhost:60179',
  methods: ['GET', 'POST', 'DELETE'],
  
});

app.get('/monitores', getMonitores);
app.get('/monitores/:id', findMonitorById);
app.post('/monitor', createMonitor);

app.listen({ port: 3333 }, () => {
  console.log(`API funcionando na porta ${3333}`);
});