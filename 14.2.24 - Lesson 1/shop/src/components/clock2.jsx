import React, { useState, useEffect } from 'react';

const Clock2 = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
        () => {
            setDate(new Date())
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
        

    return ( 
        <div>
            <h2>Time in {props.timezone}: {date.toLocaleTimeString('en-US', { timeZone: props.timezone })}</h2>
        </div>
     );
}
 
export default Clock2;
<div>
</div>