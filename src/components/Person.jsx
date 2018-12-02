import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.chooseActiveClick(this.props.id);
    }


    render() {
        return(
            <ul className="person" onClick={this.handleClick}>
                <li>{this.props.id}</li>
                <li>{this.props.firstName}</li>
                <li>{this.props.lastName}</li>
                <li>{this.props.email}</li>
                <li>{this.props.phone}</li>
            </ul>
        )
    }  
}

export default Person;