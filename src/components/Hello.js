import * as React from 'react';

export class Hello extends React.Component {

    state = {
        counter: 0
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <h1>Hello, {this.props.name} &times; {this.state.counter}!</h1>
        );
    }

}
