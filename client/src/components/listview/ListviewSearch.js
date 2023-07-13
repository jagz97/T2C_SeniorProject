import React, {useState} from 'react'
import {
    Search,
} from 'akar-icons'


const ListviewSearch = ({searchHandler}) => {
    const [searchText, setSearchText] = useState("")

    const changeHandler = (event) => {
        setSearchText(event.target.value) // update input on every change
        searchHandler(searchText) // search the updated input in parent
    }
    
    return (
        <div className="container-search p-2 rounded-2">
            <span className="icon-search"><Search size={20}/></span>
            <input 
                className="input-search shadow-none" 
                type="text"
                name="search"
                value={searchText}
                placeholder="Search"
                onChange={(event) => {changeHandler(event)}}
            />
        </div>
    )
}

export default ListviewSearch

