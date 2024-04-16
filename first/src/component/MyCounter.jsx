import React, { useState } from 'react'
import Counter from './Counter';

const MyCounter = () => {
    const [counter, setCounter] = useState([
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        { id: 3, count: 0 },
        { id: 4, count: 0 },
    ]);
    const decrement = (acounter) => {
        if (acounter.count > 0) {
            const lcounter = [...counter];
            const index = lcounter.indexOf(acounter);
            lcounter[index].count--;
            setCounter(lcounter);
        }
    }
    const increment = (acounter) => {

        const lcounter = [...counter];
        const index = lcounter.indexOf(acounter);
        lcounter[index].count++;
        setCounter(lcounter);

    }
    const deleteCounter = (acounter) => {
        const lcounter = counter.filter(item => item !== acounter);
        setCounter(lcounter);
    }
    const reset = () => {
        const lcounter = counter.map(item => {
            item.count = 0;
            return item;
        })
        setCounter(lcounter);
    }
    const getCount =()=>{
        return counter.filter(item=>item.count>0).length;

    }
    return (
        <div className='container mt-3'>
            <div>
                <button className='btn btn-success' onClick={reset}>Reset</button>
            </div>
            <p className='fw-bold text-center fs-2'>Active Counter : {getCount()}</p>
            {counter.map(item => (
                <Counter key={item.id}
                    counter={item}
                    decrement={decrement}
                    increment={increment}
                    deleteCounter={deleteCounter}
                />
            ))}
        </div>
    )
}

export default MyCounter