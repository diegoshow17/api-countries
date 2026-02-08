import { getAllCountries } from "../services/countries.service.js";

export const getCountries = async (req, res) => {
  try {
    const countries = await getAllCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({
      error: "No se pudieron obtener los países"
    });
  }
};
Create countries controller
