import React, { Component } from 'react';
import './App.css';

import PersonGrid from './components/PersonGrid';
import ActivePerson from './components/ActivePerson';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: null
        };

        this.onChangeActiveUser = this.onChangeActiveUser.bind(this); 
    }

    onChangeActiveUser(active) {
        this.setState({
            active
        });
    }

    render() {
        return (
            <div className="app">
                < PersonGrid 
                    url = "http://www.filltext.com/?rows=200&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
                    selectActiveUsers={this.onChangeActiveUser}
                />
                < ActivePerson active = {this.state.active} />
            </div>
        );
    }
}

export default App;