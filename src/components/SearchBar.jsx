import { useState } from "react"

const SearchBar = ({searchFunc, btnShow }) => {
    const [searchInput, setSearchInput] = useState('')
    const handleInput = (e) =>{
        setSearchInput(e.target.value)
        
    }
    const handleInputTwo = (e) =>{
        setSearchInput(e.target.value)
        searchFunc(e.target.value)
    }
    const searchCheck = () =>{
        searchFunc(searchInput)
    } 
    
    console.log(searchInput)
    return ( 
        <div>
            {btnShow ? (<input type="text"  placeholder="search..." value={searchInput} onChange={handleInput}/>): (<input type="text"  placeholder="search..." value={searchInput} onChange={handleInputTwo}/>)}
            
        {btnShow ? (<button onClick={searchCheck}>Search</button>): null}
        </div>
     );
}
 
export default SearchBar;