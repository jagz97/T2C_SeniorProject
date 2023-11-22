import React from "react"
import { useSearchParams } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import "./Pagination.css"
const PageNumbers = ({ pages }) => {

    const [ searchParams, setSearchParams ] = useSearchParams()
    const render = []
    let numItem = 5
    let currentPage = 1
    
    if(searchParams.get("page")) {
        currentPage = searchParams.get("page")
    } 

    const handleClick = (event) => {
        const { text } = event.target
        // if the same button is clicked it will an invalid value
        if(text !== undefined && text !== null) {
            // if a button is clicked set search param
            if( Number.isInteger(Number(text))) {
                setSearchParams({page: text})
            }
            else {
                // if next or prev is clicked take the current page
                // add or sub then set search param
                if(text.includes("Previous") && currentPage > 1 ) {
                    console.log("dec")
                    currentPage = Number(currentPage) -  1
                    setSearchParams({page: currentPage})
                }
                else if(text.includes("Next") && currentPage < render.length) {
                    console.log("inc")
                    currentPage = Number(currentPage) +  1
                    setSearchParams({page: currentPage})
                }
            }
        }
    }

    // if the total pages is less than 5
    // overwrite the current pages to be the returned total pages prop passed
    if(pages > 0 && pages < 5) {
        numItem = pages
    }

    // populate jsx array
    for( let number = 1; number <= numItem; number++) {
        render.push(
            <Pagination.Item key={number} className={`${(number) == currentPage ? "active" : null}`}>    
                {number}
            </Pagination.Item>
        )
    }
    
    return (
        <Pagination className="search-pagination justify-content-center" onClick={handleClick}>
            {
                pages > 1 ?
                    <>
                        <Pagination.Prev/>{render}<Pagination.Next/>
                    </>
                    :
                    render
            }
        </Pagination>      
    )
}

export default PageNumbers