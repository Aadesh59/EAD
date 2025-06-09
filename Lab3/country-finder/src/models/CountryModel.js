class CountryModel {
  constructor(data) {
    this.name = data.name.common;
    this.officialName = data.name.official;
    this.capital = data.capital?.[0] || 'N/A';
    this.population = data.population.toLocaleString();
    this.region = data.region;
    this.subregion = data.subregion || 'N/A';
    this.languages = data.languages ? Object.values(data.languages).join(', ') : 'N/A';
    this.currency = data.currencies ? Object.values(data.currencies)[0].name : 'N/A';
    this.flag = data.flags.png;
    this.map = data.maps?.googleMaps;
  }
}

export default CountryModel;