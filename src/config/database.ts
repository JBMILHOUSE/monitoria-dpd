import mongoose from "mongoose";

export async function connectionDatabase() {
   try {
      await mongoose.connect('mongodb://monitoriacotuca:monitoria@monitoria-dpd-shard-00-00.otb7r.mongodb.net:27017,monitoria-dpd-shard-00-01.otb7r.mongodb.net:27017,monitoria-dpd-shard-00-02.otb7r.mongodb.net:27017/?ssl=true&replicaSet=atlas-p4ftlg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=monitoria-dpd')
      console.log('conectado ao mongodb')
   } catch (error) {
      console.log(`Erro na conexão do mongoDB ${error}`)
   }
}