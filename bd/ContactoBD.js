import Contacto from "../models/modelContacto.js";

export async function nuevoContacto({ nombre, edad }) {
    const contacto = new Contacto({ nombre, edad });
    console.log("__________");
    console.log(contacto);
    console.log("__________");
    const respuestaMongo = await contacto.save();
    return respuestaMongo;
}

export async function mostrarcontactos() {
    const contactosBD = await Contacto.find();
    return contactosBD;
}

export async function editarContacto({ id, nombre, edad }) {
    const respuestaMongo = await Contacto.findByIdAndUpdate(id, { nombre, edad });
    return respuestaMongo;

}


export async function borrarContacto(id){
    const respuestaMongo= await Contacto.findByIdAndDelete (id)
    return respuestaMongo
}

export async function buscarContacto(nombre) {
    const contactosBD= await Contacto.find(nombre)
    return contactosBD   
    
}
 export async function buscarPorId(id) {
    const contactoBD= await Contacto.findById(id)
    return contactoBD
    
 }