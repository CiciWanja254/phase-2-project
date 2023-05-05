import React from 'react';
import currencies from './../../data';

function ExchangeCurrentCurrencyForm(props) {

  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="amount-input">Enter amount:</label>
      <input
        type="number"
        id="amount-input"
        name="amount-input"
        value={props.amount}
        onChange={props.onAmountChange}
        required
      />
      <label htmlFor="from-currency-select">From currency:</label>
      <select
        id="from-currency-select"
        name="from-currency-select"
        value={props.fromCurrency}
        onChange={props.onFromCurrencyChange}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <label htmlFor="to-currency-select">To currency:</label>
      <select
        id="to-currency-select"
        name="to-currency-select"
        value={props.toCurrency}
        onChange={props.onToCurrencyChange}
      >
        {
          currencies.map((currency, index) => (<option key={index} value={currency}>{currency}</option>))
        }
      </select>
      <button type="submit">Convert</button>
    </form>
  );
}

export default ExchangeCurrentCurrencyForm;
