import ApiService from '../services/ApiService';
import CountryModel from '../models/CountryModel';

class CountryController {
  constructor() {
    ApiService.init();
  }

  async getCountry(countryName) {
    try {
      const response = await ApiService.get(`/name/${countryName}`);
      return new CountryModel(response.data[0]);
    } catch (error) {
      console.error('Error fetching country data:', error);
      throw error;
    }
  }
}

export default CountryController;