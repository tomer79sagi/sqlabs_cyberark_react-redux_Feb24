import React, { Component } from 'react';

class Clock extends Component {
    
    timerID;

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h2>Time in {this.props.timezone}: {this.state.date.toLocaleTimeString('en-US', { timeZone: this.props.timezone })}</h2>
            </div>
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState({
                    date: new Date()
                })
            }, 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}
 
export default Clock;