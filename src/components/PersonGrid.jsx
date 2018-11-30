import React, { Component } from 'react';

import Person from './Person';

class PersonGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            error: null,
            isLoaded: false
        };

        this.activeSelector = this.activeSelector.bind(this);
        this.filterByFiled = this.filterByFiled.bind(this);

    }

    componentDidMount() {
        fetch(this.props.url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    activeSelector(id) {
        this.props.selectActiveUsers(
            this.state.data.filter(item => item.id === id)[0]
        )}

    filterByFiled(field) {
        console.log(field)
    }

    render() {

        const { error, isLoaded, data } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='container'>
                    <Person 
                        id='id' 
                        firstName='name'
                        lastName='surname'
                        email='email'
                        phone='phone'
                        chooseActiveClick={this.filterByFiled}
                    />
                    {data.map(item => (
                        <Person 
                            key={item.id} 
                            id={item.id} 
                            firstName={item.firstName} 
                            lastName={item.lastName}
                            email={item.email}
                            phone={item.phone} 
                            chooseActiveClick={this.activeSelector}
                        />
                    ))}
                </div>
            )
        }
    }
}

export default PersonGrid;