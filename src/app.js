const express = require('express');
const app = express();

const countriesRoutes = require('./routes/countries.routes');

app.use(express.json());

// Rutas
app.use('/api', countriesRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'API Countries funcionando 🚀'
  });
});

module.exports = app;
