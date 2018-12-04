import React, { Component } from 'react';
import './App.css';

import UsersGrid from './components/UsersGrid';
import SelectedUser from './components/SelectedUser';
import SourceButtons from './components/SourceButtons';
import SearchForm from './components/SearchForm';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: null,
            url: null,
            searchValue: ''
        };

        this.selectUser = this.selectUser.bind(this); 
        this.setUrlData = this.setUrlData.bind(this); 
        this.setSearchValue = this.setSearchValue.bind(this);
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

    setSearchValue(searchValue) {
        this.setState({
            searchValue
        });
    }


    render() {
        return (
            <div className="app">
                <UsersGrid 
                    url = {this.state.url}
                    searchValue = {this.state.searchValue}
                    selectActiveUsers = {this.selectUser}
                />
                <SelectedUser active = {this.state.active} />
                <SourceButtons chooseDataSet = {this.setUrlData} />
                <SearchForm getSearchValue = {this.setSearchValue} />
            </div>
        );
    }
}

export default App;