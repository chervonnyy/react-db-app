import React from 'react';

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

export default GridHeader;