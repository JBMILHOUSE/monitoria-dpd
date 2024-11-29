import type { FastifyReply, FastifyRequest } from "fastify";
import { Monitor } from "../models/monitor";

export const createMonitor = async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    const { nome, avatar, horarios } = req.body as {
      nome: string;
      avatar: string;
      horarios:{ dia: string; hora: string }[];
    };


    const novoMonitor = new Monitor({
      nome,
      avatar,
      horarios,
    });

    await novoMonitor.save();

    reply.status(201).send({ message: "Monitor cadastrado com sucesso!", monitor: novoMonitor });
  } catch (error) {
    reply.status(500).send({ message: "Erro ao cadastrar monitor", error });
  }
}


export const getMonitores = async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
        const monitores = await Monitor.find();

        if (monitores.length === 0) {
            reply.status(401).send({ messsage: 'Nenhum monitor foi cadastrado' })
        }

        console.log(monitores)
        reply.status(201).send(monitores);

    } catch (error) {
        reply.status(500).send({ message: 'Erro ao buscar monitores', error })
    }
};

export const findMonitorById = async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {

      const { id } = req.params as { id: string };
      const isMonitor = await Monitor.findById(id);
      
      if (isMonitor) {
        reply.send({ message: 'Nenhum monitor encontrado'})
      }
      reply.status(201).send(isMonitor);

    } catch (error) {
      reply.send({ message: 'Erro ao buscar monitor encontrado' })
    }
}
