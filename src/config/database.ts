import mongoose from "mongoose";


export async function connectionDatabase() {
   try {
      await mongoose.connect('mongodb+srv://monitoriacotuca:monitoriacotuca@monitoria-dpd.otb7r.mongodb.net/?retryWrites=true&w=majority&appName=monitoria-dpd')
      console.log('conectado ao mongodb')
   } catch (error) {
      console.log(`Erro na conexão do mongoDB ${error}`)
   }
}