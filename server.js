// Importar dependencias
const express = require('express');
const dotenv = require('dotenv');

// Inicializar variables de entorno
dotenv.config();

// Crear aplicación
const app = express();

// Puerto
const PORT = process.env.PORT || 3000;

// Middleware básico
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
