import React from 'react';

const SearchBox = ({searchField, searchChange }) => {
    console.log('searchbox')
    return(
       
    <div className='pa2'>
       <input 
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          onChange={searchChange}
          placeholder='search for robots...'
       /> 
     </div>

    );
}
export default SearchBox;  