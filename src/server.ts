import fastify from "fastify";
import { connectionDatabase } from "./config/database";

const app = fastify();

connectionDatabase();

app.get('/', (res, reply) => {
   reply.send('carregando...')
})

app.listen({ port: 3333 }, () => {
  console.log(`API funcionando na porta ${3333}`)
})