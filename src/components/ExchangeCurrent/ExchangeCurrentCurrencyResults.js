import React from 'react';
import ExchangeCurrentCurrencyResult from './ExchangeCurrentCurrencyResult';

function ExchangeCurrentCurrencyResults({ history }) {
  return (
    <div>
      
      <div>
        <h2>Conversion History</h2>
        <ul id="history-list">
          {history.slice().reverse().map((item, index) => (
            <ExchangeCurrentCurrencyResult key={index} result={item}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExchangeCurrentCurrencyResults;
