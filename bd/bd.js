//mongodb+srv://Liz_User:<db_password>@cluster0.9lbdidn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import mongoose from "mongoose";
import 'dotenv/config'

async function conectarBD(){
    try {
        const conexion =  await mongoose.connect(process.env.KEY_MONGO)
        //const conexion = mongoose.connect("mongodb://localhost:27017/BACKEND")
        console.log("Conexion establecida con mongo Atlas")

    }
        catch(err){
            console.log("Error" + err)

        }

}
export default conectarBD;

