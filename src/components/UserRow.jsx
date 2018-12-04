import React from 'react';

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

export default UserRow;