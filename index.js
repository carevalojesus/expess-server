import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta
app.get("/", (req, res) => {
  res.send("¡Habemus papam!");
});

// Ruta enriquecida
app.get("/papas/:nombre", (req, res) => {
  const {nombre} = req.params;
  res.json({ mensaje: `¡Habemus papam!, ${nombre}`});
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
