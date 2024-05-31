
// //useeffect bar bar call hota rehta h , kuchh bhi change krne pe refresh hota rehta h

import React, { useState, useEffect } from 'react';

const UseEffectEx = () => {
    const [name, setName] = useState("kiet");
    
    useEffect(() => {
        console.log("Use Effect Hook");
    }, []); // This will run only once after the initial render

    useEffect(() => {
        console.log(name);
    }, [name]); // This will run only when the `name` state changes

    return (
        <div>
            <h1>useEffectEx</h1>
            <h2>name: {name}</h2>
            <button className='btn btn-primary' onClick={() => setName("new name")}>Refresh</button>
        </div>
    );
}

export default UseEffectEx;
