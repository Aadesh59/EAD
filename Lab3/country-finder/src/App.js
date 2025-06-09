import React from 'react';
import CountryController from './controllers/CountryController';
import CountryView from './views/CountryView';
import './App.css';

function App() {
  const countryController = new CountryController();

  return (
    <div className="App">
      <CountryView controller={countryController} />
    </div>
  );
}

export default App;