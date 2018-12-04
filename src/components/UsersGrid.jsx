import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserRow from './UserRow';
import GridHeader from './GridHeader';

class UsersGrid extends Component {
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

    componentDidUpdate(prevProps) {

        const findMatches = user => {
            return (user.firstName.toLowerCase().includes(this.props.searchValue.toLowerCase()) 
                || user.lastName.toLowerCase().includes(this.props.searchValue.toLowerCase()))
        }

        if (this.props.url !== prevProps.url) {
            this.load(this.props.url);
            this.setState({
                isLoaded: false
            });
        }
        if (this.props.searchValue > prevProps.searchValue) {
            this.setState({
                data: this.state.data.filter(findMatches)
            })
        } else if (this.props.searchValue < prevProps.searchValue) {
            this.load(this.props.url);
        }
    }

    load(url) {
        fetch(url)
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

        if (this.props.url === null) {
            return  <div className='container message'><h2>Choose a data source</h2></div>;
        } else if (error) {
            return  <div className='container message'><h2>Error: {error.message}</h2></div>;
        } else if (!isLoaded) {
            return  <div className='container message'><h2>Loading...</h2></div>;
        } else {
            return (
                <div className='container'>
                    <GridHeader
                        values = {['id', 'firstName', 'lastName', 'email', 'phone']}
                        chooseActiveClick={this.filterByFiled}
                    />
                    {
                        data.map((item, index) => (
                            <UserRow 
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

UsersGrid.propTypes = {
    url: PropTypes.string,
    searchValue: PropTypes.string,
    selectActiveUsers: PropTypes.func
}

export default UsersGrid;