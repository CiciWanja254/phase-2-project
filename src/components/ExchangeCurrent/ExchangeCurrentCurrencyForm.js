import React from 'react';

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
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <label htmlFor="to-currency-select">To currency:</label>
      <select
        id="to-currency-select"
        name="to-currency-select"
        value={props.toCurrency}
        onChange={props.onToCurrencyChange}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <button type="submit">Convert</button>
    </form>
  );
}

export default ExchangeCurrentCurrencyForm;
