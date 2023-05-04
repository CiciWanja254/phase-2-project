import React,{useState,useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./NavBar";
import Home from "./HomePage";
import Current from "./CurrentPage";
import History from "./HistoryPage";
import Reviews from "./ReviewsPage";

function App() {
  //   const [currencies, setCurrencies] = useState([]);

  // useEffect(() => {
  //   fetch('https://openexchangerates.org/api/currencies.json')
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     setCurrencies(data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching transactions:', error);
  //   });
  // }, []);
 return (
  <Router>
      <Navbar />
      <Routes>
        <Route path="/current" element={<Current />} />
        <Route path="/history" element={<History />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  
 )
}

export default App