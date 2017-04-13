import React, { Component } from 'react';
import '../css/hello.css';

class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorClass: 'red'
        }
    }
    _changeColor = () => {
        if (this.state.colorClass === 'red') {
            this.setState({
                colorClass: 'green'
            })
        } else {
            this.setState({
                colorClass: 'red'
            })
        }
    }
    render() {
        return (
            <h1 onClick={ this._changeColor } className={ this.state.colorClass }>{ this.props.txt }</h1>
        )
    }
}

export default Hello