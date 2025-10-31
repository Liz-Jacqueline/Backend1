import mongoose from "mongoose";
const contactoScehema= new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim : true,
        unique: false
    },
    edad: {
        type: Number,
        required: false,
        trim : true,
        unique : false
    }
})
 
export default mongoose.model("Contacto", contactoScehema)