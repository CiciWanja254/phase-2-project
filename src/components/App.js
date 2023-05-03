import React,{useState,useEffect} from "react"
import Home from "./Home"
function App() {
    const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch('https://openexchangerates.org/api/currencies.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setCurrencies(data);
    })
    .catch(error => {
      console.error('Error fetching transactions:', error);
    });
  }, []);
 return (
  <div >
   <Home currencies={currencies} setCurrencies={setCurrencies} />
  </div>
 )
}

export default App