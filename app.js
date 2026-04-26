const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Mi App CodeDeploy</title>
      </head>
      <body style="font-family: Arial; text-align: center; padding: 50px;">
        <h1>Aplicación desplegada con AWS CodeDeploy SAN RAMÓN TUS NOMBRES</h1>
        <p>Versión: 1.0.0</p>
        <p>Desplegada el: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});