import React, { useState, useEffect } from 'react';

function Currency() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [conversion, setConversion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [conversionRate, setConversionRate] = useState("")

  useEffect(() => {
    async function fetchCurrencies() {
      setLoading(true);
      const response = await fetch(`https://openexchangerates.org/api/currencies.json`);
      const data = await response.json();
      setCurrencies(Object.entries(data));
      setLoading(false);
    }
    fetchCurrencies();
  }, []);

  async function handleExchange(event) {

    
    event.preventDefault();

    if(fromCurrency === "USD"){
      setLoading(true);
    const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=18938eda4445470d9d252bb390ccfa22&base=${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const result = amount * rate;
    // console.log(result)
    const newConversion = [...conversion, { fromCurrency, toCurrency, amount, result }];
    setConversion(newConversion);
    setLoading(false);
    }else if(fromCurrency !== "USD"){
      const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=18938eda4445470d9d252bb390ccfa22`);
      const data2 = await response.json();
      const usdtoBase = data2.rates[fromCurrency];

      console.log(usdtoBase)


      const res = await fetch(`https://openexchangerates.org/api/latest.json?app_id=18938eda4445470d9d252bb390ccfa22`);
      const data3 = await res.json();
      const usdtocurr = data3.rates[toCurrency];
      console.log(usdtocurr)

      setConversionRate  ((amount/ usdtoBase) * (usdtocurr))
      

    }
  


  }

  function handleFromCurrencyChange(event) {
    setFromCurrency(event.target.value);
  }

  function handleToCurrencyChange(event) {
    setToCurrency(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleDeleteConversion(index) {
    const newConversion = [...conversion];
    newConversion.splice(index, 1);
    setConversion(newConversion);
  }

  return (
    <div className='currentPg'>
      <h1>Currency Exchange</h1>
      <form onSubmit={handleExchange}>
        <div>
          <label htmlFor="from-currency">From Currency:</label>
          <select id="from-currency" value={fromCurrency} onChange={handleFromCurrencyChange}>
            {loading ? (
              <option>Loading...</option>
            ) : (
              currencies.map(([code, name]) => (
                <option key={code} value={code}>
                  {name} ({code})
                </option>
              ))
            )}
          </select>
        </div>
        <div>
          <label htmlFor="to-currency">To Currency:</label>
          <select id="to-currency" value={toCurrency} onChange={handleToCurrencyChange}>
            {loading ? (
              <option>Loading...</option>
            ) : (
              currencies.map(([code, name]) => (
                <option key={code} value={code}>
                  {name} ({code})
                </option>
              ))
            )}
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input id="amount" type="number" value={amount} onChange={handleAmountChange} />
        </div>
        <button type="submit" className='btn'>Exchange</button>
      </form>

      <p>The exchange rate for {fromCurrency} to {toCurrency}= {conversionRate}</p>


      {conversion.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>From Currency</th>
              <th>To Currency</th>
              <th>Amount</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {conversion.map((data, index) => (
              <tr key={index}>
                <td>{data.fromCurrency}</td>
                <td>{data.toCurrency}</td>
                <td>{data.amount}</td>
                <td>{data.result.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleDeleteConversion(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Currency;
