import React, { useState, useEffect } from 'react';

function Home() {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchRates() {
      setLoading(true);
      const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=18938eda4445470d9d252bb390ccfa22&base=${baseCurrency}`);
      const data = await response.json();
      setRates(data.rates);
      setLoading(false);
    }
    fetchRates();
  }, [baseCurrency]);

  function handleBaseCurrencyChange(event) {
    setBaseCurrency(event.target.value);
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredRates = Object.entries(rates).filter(([currency]) =>
    currency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='homeDiv'>
      <h1>ExchangePal</h1>
      <div>
       <label htmlFor="base-currency">Base Currency:</label>
      <input id="base-currency" type="text" value={baseCurrency} onChange={handleBaseCurrencyChange} />
      </div>
      <div>
      <label htmlFor="search-term">Search Currency:</label>
      <input id="search-term" type="text" value={searchTerm} onChange={handleSearchTermChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : filteredRates.length ? (
            filteredRates.map(([currency, rate]) => (
              <tr key={currency}>
                <td>{currency}</td>
                <td>{rate.toFixed(2)}</td>
              </tr>
            ))
          ) : (
          <tr>
            <td colSpan="2">No results found.</td>
          </tr>
          )}
      </tbody>
    </table>
    </div>
  );
}

export default Home;