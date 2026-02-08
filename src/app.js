import express from "express";
import countriesRoutes from "./routes/countries.routes.js";

const app = express();

app.use(express.json());

// Rutas
app.use(countriesRoutes);

export default app;

Create app configuration
