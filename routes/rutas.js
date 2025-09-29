import { Router } from "express";
const router = Router();

// Ruta principal -> renderiza home.ejs
router.get("/", (req, res) => {
  res.render("home");


});



// Ruta /info -> muestra texto
router.get("/info", (req, res) => {
  res.render("informacion");
});

// Ruta /c -> muestra texto de contacto
router.get("/c", (req, res) => {
  res.render("contactanos");
});

export default router;
