import React from 'react';
import Clock from './clock';

const PageHeader = (props) => {
    return ( 
        <div className="center">
            <h1>{ props.title }</h1>
            <div>
                <Clock date={new Date()}/>
            </div>
        </div>
     );
}
 
export default PageHeader;