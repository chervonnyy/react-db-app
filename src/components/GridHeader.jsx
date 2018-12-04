import React from 'react';
import PropTypes from 'prop-types';

function GridHeader(props) {

    function handleClick(e) {
        props.chooseActiveClick(e.target.innerHTML);
    }

    return(
        <ul className="user grid-header" onClick={handleClick}>
            {props.values.map((val, index) => <li key={index}>{val}</li>)}
        </ul>
    ) 
}

GridHeader.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string),
    chooseActiveClick: PropTypes.func
}

export default GridHeader;