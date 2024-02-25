import React, { Component } from 'react';
import Clock from './clock';
import Clock2 from './clock2';
import Clock3 from './clock3';
import Toggle from './toggle';
import Animals from './animals';
import Counter from './counter';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                My name is { this.props.name }!
                <div>
                    <Clock timezone="America/New_York" />
                    <Clock2 timezone="Asia/Tokyo" />
                    <Clock3 timezone="Europe/London" />

                    <Toggle/>

                    <Animals/>

                    <Counter/>
                </div>
            </div>
        );
    }
}
 
export default Home;