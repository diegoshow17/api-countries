import fetch from "node-fetch";

const API_URL = "https://restcountries.com/v3.1/all";

export const getAllCountries = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error al consumir la API externa");
    }

    const data = await response.json();

    return data.map(country => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : "No tiene",
      region: country.region
    }));

  } catch (error) {
    throw error;
  }
};

Create countries service
