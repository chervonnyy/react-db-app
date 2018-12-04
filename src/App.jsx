import React, { Component } from 'react';
import './App.css';

import UsersGrid from './components/UsersGrid';
import SelectedUser from './components/SelectedUser';
import SourceButtons from './components/SourceButtons';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: null,
            url: null
        };

        this.selectUser = this.selectUser.bind(this); 
        this.setUrlData = this.setUrlData.bind(this); 
    }

    selectUser(active) {
        this.setState({
            active
        });
    }

    setUrlData(url) {
        this.setState({
            url
        });
    }


    render() {
        return (
            <div className="app">
                <UsersGrid 
                    url = {this.state.url}
                    selectActiveUsers = {this.selectUser}
                />
                <SelectedUser active = {this.state.active} />
                <SourceButtons chooseDataSet = {this.setUrlData} />
            </div>
        );
    }
}

export default App;