import React from "react";
import SearchBar from "./SearchBar";

function Home({currencies}){
    return (
        <>
        <SearchBar/>
        <table className="table">
          <thead className="thead">
            <tr className="trHead">
              <th>Currency</th>
            </tr>
          </thead>
          <tbody className="tbody">
          {currencies.map((currency )=> (
            <tr className="trBody" key={currency.index}>
              <td className="td">{currency.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
}

export default Home;
