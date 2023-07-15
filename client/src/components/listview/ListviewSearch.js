import React, {useState} from 'react'
import {
    Search,
} from 'akar-icons'


const ListviewSearch = ({searchText, setSearchText}) => {
    return (
        <div className="container-search rounded-2">
            <span className="icon-search"><Search size={20}/></span>
            <input 
                className="input-search shadow-none" 
                type="text"
                name="search"
                value={searchText}
                placeholder="Search"
                onChange={(event) => setSearchText(event.target.value)}
            />
        </div>
    )
}

export default ListviewSearch

