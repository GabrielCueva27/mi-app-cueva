const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const fechaDespliegue = new Date().toLocaleString('es-PE', {
    timeZone: 'America/Lima',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mi App CodeDeploy</title>

        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            font-family: Arial, Helvetica, sans-serif;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px;
          }

          .card {
            width: 100%;
            max-width: 760px;
            background: #ffffff;
            color: #1f2937;
            border-radius: 18px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
          }

          .badge {
            display: inline-block;
            background: #dcfce7;
            color: #166534;
            padding: 8px 16px;
            border-radius: 999px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          h1 {
            margin: 0 0 16px;
            font-size: 34px;
            color: #0f172a;
          }

          p {
            font-size: 18px;
            line-height: 1.6;
            margin: 10px 0;
          }

          .info {
            margin-top: 25px;
            padding: 20px;
            background: #f1f5f9;
            border-radius: 12px;
            text-align: left;
          }

          .info p {
            margin: 8px 0;
          }

          .info strong {
            color: #0f172a;
          }

          footer {
            margin-top: 25px;
            font-size: 14px;
            color: #64748b;
          }
        </style>
      </head>

      <body>
        <main class="card">
          <div class="badge">Segundo despliegue exitoso</div>

          <h1>Aplicación actualizada con AWS CodeDeploy</h1>

          <p>
            La aplicación fue modificada y desplegada nuevamente desde GitHub usando
            <strong>AWS CodeDeploy</strong>.
          </p>

          <div class="info">
            <p><strong>Estudiante:</strong> Gabriel Gustavo Cueva Romani</p>
            <p><strong>Proyecto:</strong> mi-app-cueva</p>
            <p><strong>Ubicación:</strong> San Ramón</p>
            <p><strong>Versión:</strong> 2.0.0</p>
            <p><strong>Fecha de despliegue:</strong> ${fechaDespliegue}</p>
          </div>

          <footer>
            Aplicación desarrollada con Node.js, Express y AWS CodeDeploy.
          </footer>
        </main>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});