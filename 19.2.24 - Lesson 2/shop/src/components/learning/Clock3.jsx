import React, { useState, useEffect } from 'react';

const Clock3 = (props) => {
    const [date, setDate] = useState(new Date());

    // Mount and unmount behavior
    useEffect(() => {
        console.log('Clock3 mounted');
        // 1. Mount behavior
        const timerID = setInterval(
            () => {
                setDate(new Date())
            }, 1000
        );

        return () => {
            clearInterval(timerID);
        }
    }, []);

    return ( 
        <div>
            <h2>Time in {props.timezone}: {date.toLocaleTimeString('en-US', { timeZone: props.timezone })}</h2>
        </div>
     );
}
 
export default Clock3;