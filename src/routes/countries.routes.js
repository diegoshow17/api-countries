import { Router } from "express";
import { getCountries } from "../controllers/countries.controller.js";

const router = Router();

router.get("/countries", getCountries);

export default router;

Create countries routes
