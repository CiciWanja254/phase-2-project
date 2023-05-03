import React,{useState} from "react";

  function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    function handleChange(event) {
      const newSearchTerm = event.target.value;
      setSearchTerm(newSearchTerm);
      onSearch(newSearchTerm);
    }
  
    return (
      <div className="search">
        <input type="text" value={searchTerm} placeholder="Search.." onChange={handleChange} />
      </div>
    );
  }
 
  export default SearchBar