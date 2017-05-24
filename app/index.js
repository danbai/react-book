import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({})

        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        return (
            <div>This is a demo</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



