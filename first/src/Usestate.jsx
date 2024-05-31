import React, { useState } from 'react';

const Usestate = () => {
    const [userInfo, setUserInfo] = useState({ name: "kiet", class: "mca" });
    const [counter, setCounter] = useState(0);

    const changeName = () => {
        setUserInfo({ ...userInfo, name: "kiet mca" });
        console.log(userInfo.name); // Note: This will log the old name due to state update being asynchronous
    };

    return (
        <div>
            <h1>name: {userInfo.name}</h1>
            <h1>class: {userInfo.class}</h1>
            <button className='btn btn-primary' onClick={changeName}>Change Name</button>
            <button className='btn btn-primary' onClick={() => {
                setCounter((prevCounter) => prevCounter + 1);
                setCounter((prevCounter) => prevCounter + 1);
                setCounter((prevCounter) => prevCounter + 1);
            }}>
                Increment
            </button>
            <h1>Counter: {counter}</h1>
        </div>
    );
};

export default Usestate;




