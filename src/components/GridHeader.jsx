import React, { Component } from 'react';

class GridHeader extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.chooseActiveClick(e.target.innerHTML);
    }


    render() {
        return(
            <ul className="person grid-header" onClick={this.handleClick}>
                {this.props.values.map((val, index) => <li key={index}>{val}</li>)}
            </ul>
        )
    }  
}

export default GridHeader;