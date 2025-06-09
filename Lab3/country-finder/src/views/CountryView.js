import React, { useState } from 'react';

const CountryView = ({ controller }) => {
  const [countryName, setCountryName] = useState('');
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!countryName.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const countryData = await controller.getCountry(countryName);
      setCountry(countryData);
    } catch (err) {
      setError('Country not found. Please try another name.');
      setCountry(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>🌐 Country Info Finder</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          placeholder="Enter country name"
          style={{ padding: '8px', marginRight: '10px', width: '300px' }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}

      {country && (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img 
              src={country.flag} 
              alt={`Flag of ${country.name}`} 
              style={{ width: '100px', marginRight: '20px', border: '1px solid #ddd' }} 
            />
            <h2 style={{ margin: 0 }}>{country.name}</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            <div>
              <h3>Basic Information</h3>
              <p><strong>Official Name:</strong> {country.officialName}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
              <p><strong>Population:</strong> {country.population}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Subregion:</strong> {country.subregion}</p>
            </div>
            
            <div>
              <h3>Additional Details</h3>
              <p><strong>Languages:</strong> {country.languages}</p>
              <p><strong>Currency:</strong> {country.currency}</p>
              {country.map && (
                <p>
                  <strong>Map: </strong>
                  <a href={country.map} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryView;