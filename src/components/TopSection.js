import React from 'react'
import add from '../assets/images/add.png'
import { ReactComponent as SearchIcon } from '../assets/images/search.svg'; 
import { ReactComponent as Filter } from '../assets/images/filter.svg'; 

const TopSection = () => {
  return (
    <div className='top-section'>
        <div className='page-details'>
            <b className='page-name'>People</b>
            <img src={add} height={30} width={30} alt="add"/>
        </div>
        <div className='search-filter-container'>
            <div className="search-bar">
                <input type="text" placeholder="Search" className="input search-input" />
                <span className="search-icon">
                    <SearchIcon />
                </span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Filter" className="filter search-input" />
                <span className="search-icon">
                    <Filter />
                </span>
            </div>
        </div>
    </div>
  )
}

export default TopSection