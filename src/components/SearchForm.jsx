import React from 'react';
import PropTypes from 'prop-types';

function SearchForm(props) {
    
    const handleChange = event => props.getSearchValue(event.target.value);

    return(
        <form className="search-form">
            <label>
                Search for name or surname: <input type="text" onChange={handleChange} />
            </label>
        </form>
    ) 
}

SearchForm.propTypes = {
    getSearchValue: PropTypes.func
}

export default SearchForm;