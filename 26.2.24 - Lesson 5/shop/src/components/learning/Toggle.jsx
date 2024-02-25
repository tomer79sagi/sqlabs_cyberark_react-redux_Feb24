import React, { Component } from 'react';

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // 1. First option for binding 'this' to the component
        // this.handleClick = this.handleClick.bind(this);
    }

    // 2. Second option for binding 'this' to the component
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };
    
    render() { 
        return (
            <div>
                <button onClick={this.handleClick}>
                    { this.state.isToggleOn ? 'ON' : 'OFF' }
                </button>
            </div>
        );
    }
}
 
export default Toggle;