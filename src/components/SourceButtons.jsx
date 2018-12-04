import React from 'react';
import PropTypes from 'prop-types';

function SourceButtons(props) {
    function chooseFirstData() {
        props.chooseDataSet('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    }

    function chooseSecondData() {
        props.chooseDataSet('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    }

    return(
            <div className="source">
                <div className="source-button" onClick={chooseFirstData}>load 32 users</div>
                <div className="source-button" onClick={chooseSecondData}>load 1000 users</div>
            </div>
        )  
}

SourceButtons.propTypes = {
    chooseDataSet: PropTypes.func
}

export default SourceButtons;