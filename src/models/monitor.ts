import { model, Schema } from "mongoose";

interface IMonitor extends Document {
   nome: string;
   avatar: string;
   horarios: { dia: string; hora: string}[];
}

const monitorSchema = new Schema<IMonitor>({
   nome: { type: String, required: true },
   avatar: { type: String },
   horarios: [{
      dia: {
        type: String,
        required: true,
      },
      hora: {
        type: {
          type: String,
          required: true
        },
      },
   }]
});

export const Monitor = model<IMonitor>('Monitores', monitorSchema)