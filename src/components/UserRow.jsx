import React from 'react';
import PropTypes from 'prop-types';

function UserRow(props) {

    function handleClick() {
        props.chooseActiveClick(props.id);
    }

    return(
        <ul className="user" onClick={handleClick}>
            <li>{props.id}</li>
            <li>{props.firstName}</li>
            <li>{props.lastName}</li>
            <li>{props.email}</li>
            <li>{props.phone}</li>
        </ul>
    )

}

UserRow.propTypes = {
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    chooseActiveClick: PropTypes.func
}


export default UserRow;