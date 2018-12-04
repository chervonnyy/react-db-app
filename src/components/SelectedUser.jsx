import React from 'react';
import PropTypes from 'prop-types';

function SelectedUser(props) {

    if (props.active == null) {
        return <div className="selected-user"><h2>Select a user</h2></div>
    }

    const { firstName, lastName, description, address } = props.active;

    return(
        <div className="selected-user">
            <p><b>Выбран пользователь: </b>{firstName} {lastName}</p>
            <p>{description}</p>
            <p>
            Адрес проживания: <b>{address.streetAddress}</b><br/>
            Город: <b>{address.city}</b><br/>
            Провинция/штат: <b>{address.state}</b><br/>
            Индекс: <b>{address.zip}</b>
            </p>
        </div>
    )

}

SelectedUser.propTypes = {
    active: PropTypes.object
}

export default SelectedUser;