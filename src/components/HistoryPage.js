// import React, { useState, useEffect } from 'react';

// function History() {
//   const [date, setDate] = useState('');
//   const [rates, setRates] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function fetchRates() {
//     setLoading(true);
//     const response = await fetch(`https://openexchangerates.org/api/${date}.json?app_id=QeVexKJLRT1jWdn9iKa5G3yupH19c8wP`);
//     const data = await response.json();
//     setRates(Object.entries(data.rates));
//     setLoading(false);
//   }

//   function handleDateChange(event) {
//     setDate(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     fetchRates();
//   }

//   return (
//     <div className='histo'>
//       <h1>Exchange Rate History</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="date">Select a date:</label>
//         <input type="date" id="date" value={date} onChange={handleDateChange} />
//         <button type="submit" className='btn'>Show Rates</button>
//       </form>
//       {loading ? (
//         <p>Loading...</p>
//       ) : rates.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Currency Code</th>
//               <th>Exchange Rate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rates.map</div>(([code, rate]) => (
//               <tr key={code}>
//                 <td>{code}</td>
//                 <td>{rate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No rates to display</p>
//       )}
//     </div>
//   );
// }

// export default History;


import React, {useEffect, useState} from "react";

function History(){
    const [date, setStartDate] = useState("");
    const[currencyType,setCurrencyTypes] = useState([])
    const[exchangeRate, setExchangeRate]= useState("")
    const[secondaryCurrency, setSecondaryCurrency]= useState("")
    useEffect(() => {
          fetch('https://openexchangerates.org/api/currencies.json?app_id=18938eda4445470d9d252bb390ccfa22')
          .then(response => response.json())
          .then(data =>  setCurrencyTypes(Object.keys(data)))
          .catch(error => {
            console.error('Error fetching currencies:', error);
          });
        }, []);
        console.log(currencyType);
        console.log(date);
        
        console.log(secondaryCurrency)
        function handlesubmit (){
            console.log (date)
                fetch(`https://openexchangerates.org/api/historical/${date}.json?app_id=18938eda4445470d9d252bb390ccfa22`)
                .then(res => res.json())
                .then(data=> setExchangeRate(data.rates[secondaryCurrency]))
            }
            console.log(exchangeRate);
        


    return (
      <div className="histo">
        <h1>Exchange Rates History</h1>
        <>
        <div className="form">
         <div className="form-group" >
         <label>Choose date</label>
         <input  type="date" onChange={(e) => setStartDate(e.target.value)} />
         </div>
         
         <div className="form-group" >
         <label>Select Secondary currency</label>
         <select value={secondaryCurrency} onChange={(e)=> setSecondaryCurrency(e.target.value)}>
            {currencyType.map(currency => <option value={currency} key={currency}>{currency}</option>
            )}
         </select> 
         </div>
         <input onClick={handlesubmit} type="submit" className="btn btn-primary"/>
    </div>
    <div>
        <p>{date},{secondaryCurrency} against USD {exchangeRate}</p>
    </div>
        </>
        </div>
         
    );

}
export default History;