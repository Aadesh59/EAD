import axios from 'axios';

const ApiService = {
  init() {
    axios.defaults.baseURL = 'https://restcountries.com/v3.1';
  },

  get(resource) {
    return axios.get(resource);
  }
};

export default ApiService;