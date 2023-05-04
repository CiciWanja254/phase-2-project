// ExchangeCurrentCurrency.js

import React, { useState } from "react";
import ExchangeCurrentCurrencyForm from "./ExchangeCurrentCurrencyForm";
import ExchangeCurrentCurrencyResults from "./ExchangeCurrentCurrencyResults";

const ExchangeCurrentCurrency = () => {
  const apiUrl = "https://openexchangerates.org/api/latest.json";
  const appId = "1c835efc2f5344e08e02ee49c10151fc";

  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    convert(amount, fromCurrency, toCurrency);
  };

  const convert = (amount, fromCurrency, toCurrency) => {
    fetch(`${apiUrl}?app_id=${appId}&base=${fromCurrency}&symbols=${toCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = data.rates[toCurrency];
        const result = amount * exchangeRate;
        const resultText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        setResult(resultText);
        setHistory([...history, resultText]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <ExchangeCurrentCurrencyForm
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        onAmountChange={(e) => setAmount(e.target.value)}
        onFromCurrencyChange={(e) => setFromCurrency(e.target.value)}
        onToCurrencyChange={(e) => setToCurrency(e.target.value)}
        onSubmit={handleFormSubmit}
      />
      <ExchangeCurrentCurrencyResults result={result} history={history} />
    </div>
  );
};

export default ExchangeCurrentCurrency;
