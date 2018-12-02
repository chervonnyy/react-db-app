import React, { Component } from 'react';

import Person from './Person';
import GridHeader from './GridHeader';

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
        const compare = (field, reverse = false) => (a, b) => {
            if (reverse === true) {
                return (a[field] > b[field]) ? -1 : (a[field] < b[field]) ? 1 : 0;
            }
                return (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0;
            }

        this.setState({
            data: (this.state.data[0][field] === this.state.data.sort(compare(field))[0][field]) 
                ? this.state.data.sort(compare(field, true)) : this.state.data.sort(compare(field))
        });
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
                    <GridHeader
                        values = {['id', 'firstName', 'lastName', 'email', 'phone']}
                        chooseActiveClick={this.filterByFiled}
                    />
                    {
                        data.map((item, index) => (
                            <Person 
                                key={index} 
                                id={item.id} 
                                firstName={item.firstName} 
                                lastName={item.lastName}
                                email={item.email}
                                phone={item.phone} 
                                chooseActiveClick={this.activeSelector}
                            />
                        ))
                    }
                </div>
            )
        }
    }
}

export default PersonGrid;