const { getAllCountries } = require('../services/countries.service');

const getCountries = async (req, res) => {
  try {
    const countries = await getAllCountries();

    res.status(200).json({
      success: true,
      data: countries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getCountries
};
