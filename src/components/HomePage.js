import React from "react";
import SearchBar from "./SearchBar";

function Home({currencies,setCurrencies}){

  //   function handleSearch(searchTerm) {
  //   fetch(`https://openexchangerates.org/api/currencies.json?currency_like=${searchTerm}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setCurrencies(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  //   return (
  //       <>
  //       <SearchBar onSearch={handleSearch}/>
  //       <table className="table">
  //         <thead className="thead">
  //           <tr className="trHead">
  //             <th>Currency</th>
  //           </tr>
  //         </thead>
  //         <tbody className="tbody">
  //         {currencies.map((currency )=> (
  //           <tr className="trBody" key={currency.index}>
  //             <td className="td">{currency.name}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //     </>
  return (
    <h1>Home Page</h1>
  )
}

export default Home;