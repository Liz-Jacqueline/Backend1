import { Router } from "express";
import { buscarContacto, nuevoContacto, borrarContacto, editarContacto, buscarPorId} from "../bd/ContactoBD.js"; 
import { mostrarcontactos } from "../bd/ContactoBD.js";  
//import { Contacto} from "../bd/ContactoBD.js";  
//import { buscarPorId } from "../bd/ContactoBD.js";
import { render } from "ejs";
const router = Router();
var artistas =["Bethoven", "Van Gog", "Mozart", "Picazo",]

router.get("/", function   (req, res){
  res.render("home", {artistas});
})
// Ruta principal -> renderiza home.ejs
router.get("/", (req, res) => {
  res.render("home");


});



// Ruta /info -> muestra texto
router.get("/info", (req, res) => {
  res.render("informacion");
});

// Ruta /c -> muestra texto de contacto
router.get("/contactanos",async function (req, res) {
  res.render("contactanos");
});




//porque el metodo del formulario es post
router.post("/contactanos", async function(req, res) {
  var nombre = req.body.nombre;
  var edad = req.body.edad;
  console.log("Nombre :" + nombre + "Edad" + edad);
  await nuevoContacto(req.body)
  res.render("Respuesta", {nombre,edad});
});

router.get("/mostrarcontactos", async function (req, res) {
  const contactosBD=  await mostrarcontactos()
  res.render("mostrarcontactos", {contactosBD});
  //res.end;
})
//router.get("/editar/:id", async function (req, res){
 // res.render("editarcontacto")
//})

router.get("/editarContacto/:id", async function (req, res) {
  const id=req.params.id
  const contactoBD= await buscarPorId(id)
res.render("editarContacto", {contactoBD});
  
})
router.post("/editarContacto", async function(req, res){
 console.log (respuestaMongo)
 
res.redirect("/mostrarContactos")})

router.get("/borrar/:id", async function (req,res){
  const id=req.params.id
  const respuestaMongo= await borrarContacto(id)
res.redirect ("/mostrarcontactos")
})


router.post("/buscarContacto", async function(req, res) {
  const nombre=req.body.nombre 
  const respuestaMongo= await buscarContacto(nombre)
res.render("mostrarcontactos", {contactosBD})
})
export default router;
