import React from "react";

function Home(){
    return (
        <table className="table">
          <thead className="thead">
            <tr className="trHead">
              <th>Currency</th>
            </tr>
          </thead>
          <tbody className="tbody">
          {currencies.map(currency => (
            <tr className="trBody" key={currency.index}>
              <td className="td">{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}