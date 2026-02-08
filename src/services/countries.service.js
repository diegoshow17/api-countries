const axios = require('axios');

const API_URL = 'https://restcountries.com/v3.1/all';

const getAllCountries = async () => {
  try {
    const response = await axios.get(API_URL);

    const countries = response.data.map(country => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : 'N/A',
      region: country.region,
      population: country.population,
      flag: country.flags?.png
    }));

    return countries;
  } catch (error) {
    throw new Error('Error al consumir la API de países');
  }
};

module.exports = {
  getAllCountries
};
