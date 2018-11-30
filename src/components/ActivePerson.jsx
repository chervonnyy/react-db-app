import React from 'react';

function ActivePerson(props) {

    if (props.active == null) {
        return <h2>Select a user</h2>
    }

    const { firstName, lastName, description, address } = props.active;

    return(
        <div className="active-person">
            <p><b>Выбран пользователь: </b>{firstName} {lastName}</p>
            <textarea value={description}></textarea>
            <p>
            Адрес проживания: <b>{address.streetAddress}</b><br/>
            Город: <b>{address.city}</b><br/>
            Провинция/штат: <b>{address.state}</b><br/>
            Индекс: <b>{address.zip}</b>
            </p>
        </div>
    )

}

export default ActivePerson;