import express from "express";
import rutas from "./routes/rutas.js";
import conectarBD from "./bd/bd.js";  

const app = express();
async function conexion(){
  await conectarBD()
}

conexion()

app.set("view engine", "ejs");

// Aquí usas todas las rutas que definiste en rutas.js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", rutas);
app.use("/contactanos", rutas);
app.use("/info", rutas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Aplicación en http://localhost:" + PORT);
});
