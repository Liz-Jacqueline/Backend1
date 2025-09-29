import express from "express";
import rutas from "./routes/rutas.js";

const app = express();

app.set("view engine", "ejs");

// Aquí usas todas las rutas que definiste en rutas.js
app.use("/", rutas);
app.use("/c", rutas);
app.use("/info", rutas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Aplicación en http://localhost:" + PORT);
});
